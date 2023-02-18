import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { MESSAGE_ADD_SUCCESS, MESSAGE_UPDATE_SUCCESS, TYPE_SUCCESS_MESSAGE } from '@Const/const';
import {
  fetchAreas,
  fetchUsers,
  fetchSortedPhases,
  fetchImpiDocuments,
  fetchNotificationPeriod,
  fetchNotificationFequency,
  createAutorityNotification,
  fetchAutorityNotificationPhases,
  createAutorityNotificationPhases,
  updateAutorityNotificationPhases
} from '@Redux/catalogs/authorityNotificationSlice';

const useAuthorityNotifications = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState({});
  const [autorityNotificationPhases, setAutorityNotificationPhases] = useState(
    []
  );
  const [jobAreas, setJobAreas] = useState([]);
  const [sortedPhases, setSortedPhases] = useState([]);
  const [impiDocuments, setImpiDocuments] = useState([]);
  const [notificationPeriod, setNotificationPeriod] = useState([]);
  const [notificationFequency, setNotificationFequency] = useState([]);
  const [users, setUsers] = useState([]);

  const [jobAreaSelected, setJobAreasSelected] = useState(0);

  const [autorityNotificationsData, setAutorityNotificationsData] = useState(
    {}
  );

  const areaSortedPhases = useSelector(
    (state) => state.authorityNotifications.areaSortedPhases
  );

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const setRowsValues = async (jobArea) => {
    const sortedPhasesData = await dispatch(fetchSortedPhases(jobArea));

    const result = {};
    sortedPhasesData.forEach(({ jobAreaProcedurePhase, sophId }) => {
      const {
        jappId,
        jobArea: { joaId },
        procedurePhase: { prphId }
      } = jobAreaProcedurePhase;

      const aunpIndex = autorityNotificationPhases.findIndex(
        (item) => item.sortedPhase.sophId === sophId
      );

      if (aunpIndex === -1) {
        result[jappId] = { sophId, joaId, prphId };
      } else {
        const autorityNotificationPhase = autorityNotificationPhases[aunpIndex];
        const {
          aunpId,
          autorityNotification: { aunoId },
          startPhase: { prmaId: startPhase },
          endPhase: { prmaId: endPhase },
          aunpNotificationPeriod: period,
          notificationPeriod: { opcgId: nopId },
          aunpNotificationFrequency: frequency,
          notificationFrequency: { opcgId: nofId },
          user: { usrId: user }
        } = autorityNotificationPhase;

        result[jappId] = {
          aunpId,
          aunoId,
          sophId,
          joaId,
          prphId,
          startPhase,
          endPhase,
          period,
          notificationPeriod: nopId,
          frequency,
          notificationFequency: nofId,
          user
        };
      }
    });

    const sortedPhasesTransform = sortedPhasesData.map((sophItem) => {
      const aunpIndex = autorityNotificationPhases.findIndex(
        (item) => item.sortedPhase.sophId === sophItem.sophId
      );

      if (aunpIndex !== -1) {
        return {
          ...sophItem,
          autorityNotificationPhase: autorityNotificationPhases[aunpIndex]
        };
      }

      return sophItem;
    });

    setJobAreasSelected(jobArea);
    setAutorityNotificationsData(result);
    setSortedPhases(sortedPhasesTransform);
  };

  const handdleAreaCombo = async (event) => {
    setIsLoading(true);

    const {
      target: { value: jobArea }
    } = event;

    await setRowsValues(jobArea);

    setIsLoading(false);
  };

  const handleChange = async (event, jappId, name) => {
    const {
      target: { value }
    } = event;

    const jappObj = autorityNotificationsData[jappId];
    const newProperty = {};
    newProperty[name] = value;

    const jappObjNew = { ...jappObj, ...newProperty };

    const newValues = {
      ...autorityNotificationsData,
      [jappId]: jappObjNew
    };

    setAutorityNotificationsData(newValues);
  };

  const createUpdateInitialState = async () => {
    const [
      { value: autorityNotificationPhasesList },
      { value: areasList },
      { value: impiDocumentsList },
      { value: notificationPeriodList },
      { value: notificationFequencyList },
      { value: usersList }
    ] = await Promise.allSettled([
      dispatch(fetchAutorityNotificationPhases()),
      dispatch(fetchAreas()),
      dispatch(fetchImpiDocuments()),
      dispatch(fetchNotificationPeriod()),
      dispatch(fetchNotificationFequency()),
      dispatch(fetchUsers())
    ]);

    setAutorityNotificationPhases(autorityNotificationPhasesList);
    setJobAreas(areasList);
    setImpiDocuments(impiDocumentsList);
    setNotificationPeriod(notificationPeriodList);
    setNotificationFequency(notificationFequencyList);
    setUsers(usersList);
  };

  const insertAutorityNotification = async () => {
    const payload = {
      areaSortedPhase: {
        arspId: areaSortedPhases.arspId
      },
      aunoStatus: true
    };

    const response = await dispatch(createAutorityNotification(payload));

    if (typeof response === 'object') {
      return response;
    }

    return null;
  };

  const onInsertAutorityNotificationPhases = async (
    valuesInsert,
    autorityNotificationId
  ) => {
    const payloads = valuesInsert.map((item) => ({
      autorityNotification: {
        aunoId: autorityNotificationId
      },
      sortedPhase: {
        sophId: item.sophId
      },
      startPhase: {
        prmaId: item.startPhase
      },
      endPhase: {
        prmaId: item.endPhase
      },
      aunpNotificationPeriod: item.period,
      notificationPeriod: {
        opcgId: item.notificationPeriod,
        cagId: 12
      },
      aunpNotificationFrequency: item.frequency,
      notificationFrequency: {
        opcgId: item.notificationFequency,
        cagId: 11
      },
      user: {
        usrId: item.user
      }
    }));

    await Promise.allSettled([
      payloads.map((item) => dispatch(createAutorityNotificationPhases(item)))
    ]);
  };

  const onInsert = async (valuesInsert) => {
    setIsLoading(true);

    const autorityNotification = await insertAutorityNotification();

    if (autorityNotification) {
      onInsertAutorityNotificationPhases(
        valuesInsert,
        autorityNotification.aunoId
      );
    }

    setAlertMessage({
      isOpen: true,
      message: MESSAGE_ADD_SUCCESS,
      type: TYPE_SUCCESS_MESSAGE
    });
    setIsLoading(false);
  };

  const onUpdate = async (valuesUpdate) => {
    setIsLoading(true);

    const payloads = valuesUpdate.map((item) => ({
      aunpId: item.aunpId,
      autorityNotification: {
        aunoId: item.aunoId
      },
      sortedPhase: {
        sophId: item.sophId
      },
      startPhase: {
        prmaId: item.startPhase
      },
      endPhase: {
        prmaId: item.endPhase
      },
      aunpNotificationPeriod: item.period,
      notificationPeriod: {
        opcgId: item.notificationPeriod,
        cagId: 12
      },
      aunpNotificationFrequency: item.frequency,
      notificationFrequency: {
        opcgId: item.notificationFequency,
        cagId: 11
      },
      user: {
        usrId: item.user
      }
    }));

    await Promise.allSettled([
      payloads.map((item) =>
        dispatch(updateAutorityNotificationPhases(item.aunpId, item))
      )
    ]);

    setAlertMessage({
      isOpen: true,
      message: MESSAGE_UPDATE_SUCCESS,
      type: TYPE_SUCCESS_MESSAGE
    });
    setIsLoading(false);
  };

  const onSubmit = () => {
    const values = Object.values(autorityNotificationsData);

    const valuesInsert = values.filter(
      (item) => Object.values(item).length === 10
    );

    const valuesUpdate = values.filter(
      (item) => Object.values(item).length === 12
    );

    if (valuesInsert.length !== 0) {
      onInsert(valuesInsert);
    }

    if (valuesUpdate.length !== 0) {
      onUpdate(valuesUpdate);
    }
  };

  const initialState = async () => {
    setIsLoading(true);
    await createUpdateInitialState();
    setIsLoading(false);
  };

  return {
    initialState,
    isLoading,
    //! List
    handdleAreaCombo,
    jobAreaSelected,
    sortedPhases,
    impiDocuments,
    notificationPeriod,
    notificationFequency,
    users,
    handleChange,
    //! Alert
    alertMessage,
    setAlertMessage,
    //! Create
    onSubmit,
    jobAreas,
    //! useForm
    register,
    handleSubmit,
    errors
  };
};

export default useAuthorityNotifications;
