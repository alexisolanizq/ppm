import { MESSAGE_ADD_SUCCESS, MESSAGE_UPDATE_SUCCESS } from '@Const/const';
import { useGET, usePOST, usePUT, usePUTMutation } from '@Utils/api';
import { filterByStatus } from '@Utils/array';
import { showToastSuccess } from '@Utils/toast';
import { isValid } from '@Utils/values';
import { useDispatch, useSelector } from 'react-redux';

export const useListadoActiveService = ({ service, status }) => {
  const { data, isLoading } = service();

  return {
    data: filterByStatus(data, status),
    isLoading
  };
};

export const useListadoService = ({
  store,
  url,
  onSaveList,
  listadoName = 'list',
  onSuccess = () => {},
  onError = () => {}
}) => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state[store][listadoName]);

  const { isFetching } = useGET({
    url,
    enable: !isValid(list) || list.length === 0,
    onSuccess: (response) => {
      dispatch(onSaveList(response));
      onSuccess(response);
    },
    onError
  });

  return {
    data: list || [],
    isLoading: isFetching
  };
};

export const useListadoByIdService = ({
  store,
  url,
  onSaveList,
  onSaveId,
  listadoName = 'list',
  idName = 'id',
  id = null,
  onSuccess = () => {},
  onError = () => {}
}) => {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state[store]);
  const list = storeData[listadoName];
  const idStore = storeData[idName];

  const { isFetching } = useGET({
    url,
    enable: !isValid(list) || list.length === 0 || idStore !== id,
    onSuccess: (response) => {
      dispatch(onSaveList(response));
      dispatch(onSaveId(id));
      onSuccess(response);
    },
    onError
  });

  return {
    data: list || [],
    isLoading: isFetching
  };
};

export const useRowService = ({
  url,
  store,
  onSaveRow,
  onSaveId,
  rowName = 'row',
  idName = 'id',
  id = null,
  onSuccess = () => {},
  onError = () => {},
  isEnable = false
}) => {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state[store]);
  const row = storeData[rowName];
  const idStore = storeData[idName];

  const { isFetching, isError, isSuccess } = useGET({
    url,
    enable: !isValid(row) || idStore !== id || isEnable,
    onSuccess: (response) => {
      dispatch(onSaveRow(response));
      dispatch(onSaveId(id));
      onSuccess(response);
    },
    onError
  });

  return {
    data: row || [],
    isLoading: isFetching,
    isError,
    isSuccess
  };
};

export const useAddService = ({
  url,
  onSaveRow = null,
  isToastMessage = true,
  onSuccess = () => {},
  onError = () => {}
}) => {
  const dispatch = useDispatch();
  const mutation = usePOST({
    url,
    onSuccess: (response) => {
      if (isToastMessage) showToastSuccess(MESSAGE_ADD_SUCCESS);
      if (onSaveRow !== null) dispatch(onSaveRow(response));
      onSuccess(response);
    },
    onError
  });

  return mutation;
};

export const useUpdateService = ({
  url,
  onSaveRow = null,
  onSaveRowOne = null,
  isToastMessage = true,
  onSuccess = () => {},
  onError = () => {}
}) => {
  const dispatch = useDispatch();
  const mutation = usePUT({
    url,
    onSuccess: (response) => {
      if (isToastMessage) showToastSuccess(MESSAGE_UPDATE_SUCCESS);
      if (onSaveRow !== null) dispatch(onSaveRow(response));
      if (onSaveRowOne !== null) dispatch(onSaveRowOne(response));
      onSuccess(response);
    },
    onError
  });

  return mutation;
};

export const useRowUpdateService = ({
  onSaveRow = null,
  isToastMessage = true,
  onSuccess = () => {},
  onError = () => {}
}) => {
  const dispatch = useDispatch();
  const mutation = usePUTMutation({
    onSuccess: (response) => {
      if (isToastMessage) showToastSuccess(MESSAGE_UPDATE_SUCCESS);
      if (onSaveRow !== null) dispatch(onSaveRow(response));
      onSuccess(response);
    },
    onError
  });

  return mutation;
};
