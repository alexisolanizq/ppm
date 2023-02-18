import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {
  MESSAGE_ADD_SUCCESS,
  MESSAGE_UPDATE_SUCCESS
} from '@Const/const';
import { API_COUNTRIES } from '@Const/constUrls';
import { usePOST, usePUT } from '@Utils/api';
import { showToastError, showToastSuccess } from '@Utils/toast';
import { setAreas, updateArea } from '@Redux/catalogs/areaSlice';
import { isValid } from '../../../../utils/values';

const useModalAreaEstructura = ({ onClose, row, onComplete = () => {} }) => {
  const dispatch = useDispatch();

  const {
    reset,
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: row ?? null
  });

  const onSuccessAdd = (response) => {
    onComplete(response);
    showToastSuccess(MESSAGE_ADD_SUCCESS);
    reset();
    onClose();
    dispatch(setAreas(response));
  };

  const mutationAdd = usePOST({
    url: API_COUNTRIES,
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
    url: `${API_COUNTRIES}/${row?.counId}`,
    onSuccess: onSuccessUpdate
  });

  // functions
  const onSubmit = useCallback(
    ({
      counId,
      counLargeAbbreviation,
      counNameEng,
      counNameSpa,
      counShortAbbreviation,
      counStatus
    }) => {
      const body = {
        counId,
        counLargeAbbreviation,
        counNameEng,
        counNameSpa,
        counShortAbbreviation,
        counStatus
      };

      if (isValid(row.counId)) {
        mutationUpdate.mutate({ ...body, counId: row?.counId });
      } else {
        mutationAdd.mutate(body);
      }
    },
    []
  );

  return {
    // values
    errors,
    control,
    isLoadingButton: mutationAdd.isLoading || mutationUpdate.isLoading,

    // functions
    register,
    handleSubmit,
    onSubmit
  };
};

export default useModalAreaEstructura;
