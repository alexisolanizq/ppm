import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchOfficeEmailHeaders,
  addOfficeEmailHeaders,
  fetchClientEmailHeaders,
  addClientEmailHeaders,
  fetctHolderEmailHeaders,
  addHolderEmailHeaders,
  addPersonalizedEmailHeaders
} from '@Redux/slices/mailHeadersSlice';
import { fetchOfficesData } from '@Redux/slices/officeSlice';
import { fetchHolders } from '@Redux/slices/machoteDesignSlice';

import { 
  MESSAGE_NOT_OFFICE_SELECTED
 } from '@Const/const';

const useMailHeader = () => {
  const dispatch = useDispatch();
  const offices = useSelector((state) => state.office.offices);
  const clients = useSelector((state) => state.client.clients);
  const holders = useSelector((state) => state.machoteDesign.holders);
  const clientHeaders = useSelector(
    (state) => state.mailHeaders.clientEmailHeaders
  );
  const officeHeaders = useSelector(
    (state) => state.mailHeaders.officeEmailHeaders
  );
  const holderHeaders = useSelector(
    (state) => state.mailHeaders.holderEmailHeaders
  );
  const [officeFiltered, setOfficeFiltered] = useState([]);
  const [alertMessage, setAlertMessage] = useState('');
  const [typeHeader, setTypeHeader] = useState('client');
  const [headerMailNull, setHeaderMailNull] = useState(false);
  const [mailTemplate, setMailTemplate] = useState(null);
  const [clientData, setClientData] = useState({
    client: '',
    office: '',
    holder: ''
  });
  const [mailHeader, setMailHeader] = useState({
    subject: '',
    body: ''
  });
  const [modalShow, setmodalShow] = useState(false);
  const handleMailHeader = (prop, e) => {
    setMailHeader({ ...mailHeader, [prop]: e });
  };
  const handleClientData = (prop, e) => {
    setClientData({ ...clientData, [prop]: e });
  };
  const cleanModal = () => {
    setClientData({ client: '', office: '', holder: '' });
    setMailHeader({
      subject: '',
      body: ''
    });
    setHeaderMailNull(false);
  };
  const handleTypeHeader = (prop) => {
    cleanModal();
    setTypeHeader(prop);
  };
  const init = () => {
    // dispatch(fetchClientsData());
    dispatch(fetchOfficesData());
    dispatch(fetchHolders());
    dispatch(fetchOfficeEmailHeaders());
    dispatch(fetchClientEmailHeaders());
    dispatch(fetctHolderEmailHeaders());
  };
  const getHoldersHeader = async (holderId) => {
    setMailHeader({
      subject: '',
      body: ''
    });
    const mailHeaderTemplate = holderHeaders.filter(
      (item) => item.holder.id === parseInt(holderId, 10)
    );
    setMailTemplate(mailHeaderTemplate)
    if (mailHeaderTemplate.length === 0) {
      setHeaderMailNull(true);
    } else {
      setMailHeader({
        subject: mailHeaderTemplate[0].subject,
        body: mailHeaderTemplate[0].body
      });
    }
  };
  const getClientHeader = async (agentId) => {
    setClientData({
      client: agentId,
      office: '',
      holder: ''
    });
    setHeaderMailNull(false);
    setMailHeader({
      subject: '',
      body: ''
    });
    const officeAvailable = offices.filter(
      (item) => item.ageId === parseInt(agentId, 10)
    );
    if (officeAvailable.length === 0) {
      const mailHeaderTemplate = clientHeaders.filter(
        (item) => item.agent.id === parseInt(agentId, 10)
      );
      setMailTemplate(mailHeaderTemplate);
      if (mailHeaderTemplate.length === 0) {
        setHeaderMailNull(true);
      } else {
        setMailHeader({
          subject: mailHeaderTemplate[0].subject,
          body: mailHeaderTemplate[0].body
        });
      }
      setAlertMessage(
        MESSAGE_NOT_OFFICE_SELECTED
      );
    } else {
      setOfficeFiltered(officeAvailable);
      dispatch(fetchClientEmailHeaders(agentId));
    }
  };
  const getOfficesHeader = async (officeId) => {
    setHeaderMailNull(false);
    setMailHeader({
      subject: '',
      body: ''
    });
    const mailHeaderTemplate = officeHeaders.filter(
      (item) => item.office.id === parseInt(officeId, 10)
    );
    setMailTemplate(mailHeaderTemplate);
    if (mailHeaderTemplate.length === 0) {
      setHeaderMailNull(true);
    } else {
      setMailHeader({
        subject: mailHeaderTemplate[0].subject,
        body: mailHeaderTemplate[0].body
      });
    }
    setAlertMessage(
      MESSAGE_NOT_OFFICE_SELECTED
    );
  };
  const setHolderEmailHeaders = async () => {
    const data = {
      id: 0,
      subject: mailHeader.subject,
      body: mailHeader.body,
      holder: {
        id: mailTemplate[0].holder.body.id,
      },
      jobArea: {
        id: mailTemplate[0].jobArea.id
      },
      language: {
        id: mailTemplate[0].language.id
      }
    };
    dispatch(addHolderEmailHeaders(data));
  };
  const setClientEmailHeaders = async () => {
    const data = {
      id: 0,
      subject: "string",
      body: "string",
      agent: {
        id:  mailTemplate[0].agent.id,
      },
      jobArea: {
        id: mailTemplate[0].jobArea.id,
      },
      language: {
        id: mailTemplate[0].language.id,
      }
    }
    dispatch(addClientEmailHeaders(data));
  };
  const setOfficeEmailHeaders = async () => {
    const data = {
      id: 0,
      subject: mailHeader.subject,
      body: mailHeader.body,
      office: {
        id: mailTemplate[0].office.id
      },
      jobArea: {
        id: mailTemplate[0].jobArea.id,
      },
      language: {
        id: mailTemplate[0].language.id,
      }
    };
    dispatch(addOfficeEmailHeaders(data));
  };
  const setCancel = async () => {
    setAlertMessage(
      MESSAGE_NOT_OFFICE_SELECTED
    );
  }
  const setPersonalizedEmailHeaders = async () => {
    const data = {
      id: 0,
      subject: mailHeader.subject,
      body: mailHeader.body,
      agent: null,
      jobArea: null,
      language: null 
    };
    dispatch(addPersonalizedEmailHeaders(data));

  };

  return {
    mailHeader,
    modalShow,
    typeHeader,
    clients,
    officeFiltered,
    holders,
    clientData,
    alertMessage,
    headerMailNull,
    setCancel,
    setHolderEmailHeaders,
    setClientEmailHeaders,
    setOfficeEmailHeaders,
    setPersonalizedEmailHeaders,
    getOfficesHeader,
    setAlertMessage,
    getHoldersHeader,
    getClientHeader,
    setClientData,
    handleClientData,
    handleMailHeader,
    setmodalShow,
    handleTypeHeader,
    init
  };
};

export default useMailHeader;
