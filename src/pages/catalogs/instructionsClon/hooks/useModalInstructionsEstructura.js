import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  MESSAGE_ADD_SUCCESS,
  MESSAGE_UPDATE_SUCCESS
} from '@Const/const';
import {
  API_JOB_AREAS,
  GET_REFERENCE_TYPES,
  API_INSTRUCTIONS_TYPES
} from '@Const/constUrls';
import { setArea, updateArea } from '../../../../../redux/slices/areaSliceClon';
import { setJobAreas } from '../../../../../redux/slices/jobAreaSlice';
import { useGET, usePOST, usePUT } from '@Utils/api';
import { showToastError, showToastSuccess } from '@Utils/toast';
import { isValid } from '../../../../utils/values';

const useModalAreaEstructura = ({ onClose, row, onComplete = () => {} }) => {
  const dispatch = useDispatch();
  const areasRedux = useSelector((state) => state.referenceType.referenceTypes);

  const {
    reset,
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: row ?? null
  });

  // apis
  const {
    isLoading,
    isFetching,
    data: jobAreas
  } = useGET({
    url: API_JOB_AREAS,
    enable: areasRedux.length === 0,
    onSuccess: (response) => dispatch(setJobAreas(response))
  });
  // const {
  //   isLoading,
  //   isFetching,
  //   data: phases
  // } = useGET({
  //   url: API_JOB_AREAS,
  //   enable: areasRedux.length === 0,
  //   onSuccess: (response) => dispatch(setPhases(response))
  // });

  const onSuccessAdd = (response) => {
    onComplete(response);
    showToastSuccess(MESSAGE_ADD_SUCCESS);
    reset();
    onClose();
    dispatch(setArea(response));
  };

  const mutationAdd = usePOST({
    url: API_INSTRUCTIONS_TYPES,
    onSuccess: onSuccessAdd,
    onError: () => showToastError('disculpanos')
  });

  const onSuccessUpdate = (response) => {
    onComplete(response);
    showToastSuccess(MESSAGE_UPDATE_SUCCESS);
    reset();
    onClose();
    dispatch(updateArea(response));
  };

  const mutationUpdate = usePUT({
    url: `${API_INSTRUCTIONS_TYPES}/${row?.intyId}`,
    onSuccess: onSuccessUpdate
  });

  // functions
  const onSubmit = useCallback(({ intyId, intyName, intyStatus }) => {
    const body = {
      intyId,
      intyName,
      intyStatus
    };

    if (isValid(row.intyId)) {
      mutationUpdate.mutate({ ...body, intyId: row?.intyId });
    } else {
      mutationAdd.mutate(body);
    }
  }, []);

  return {
    // values
    errors,
    control,
    jobAreas: areasRedux ?? jobAreas,
    isLoading: isLoading || isFetching,
    isLoadingButton: mutationAdd.isLoading || mutationUpdate.isLoading,

    // functions
    register,
    handleSubmit,
    onSubmit
  };
};

export default useModalAreaEstructura;
