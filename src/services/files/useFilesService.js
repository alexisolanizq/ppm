import { API_FILES, API_FILES_DOCUMENT } from '@Const/constUrls';

import { useMutation } from '@tanstack/react-query';

import {
  axiosDELETE,
  axiosGET,
  useGET,
  useGETMutation,
  usePOST
} from '@Utils/api';

import { STORE_FILES } from '@Const/store';
import { setFilesList } from '@Redux/catalogs/filesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { isValid } from '@Utils/values';

export const useListadoServiceCustom = ({
  url,
  store,
  onSaveList,
  enable = false,
  listadoName = 'list',
  onSuccess = () => {},
  onError = () => {}
}) => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state[store][listadoName]);

  const { isFetching } = useGET({
    url,
    enable: enable || list.length === 0,
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

export const useFilesListService = (enable = false) =>
  useListadoServiceCustom({
    enable,
    url: API_FILES,
    store: STORE_FILES,
    listadoName: 'filesList',
    onSaveList: setFilesList
  });

export const useFilesList = (onSuccess = () => {}) =>
  useGETMutation({
    url: API_FILES,
    onSuccess
  });

export const useAddFiles = () =>
  usePOST({
    url: API_FILES_DOCUMENT,
    image: true
  });

export const useSaveFile = () => {
  const mutation = useAddFiles();

  const onSaveFile = ({ name, file, sourceId, source }) => {
    const formData = new FormData();

    formData.append('file', file);
    formData.append('name', name);
    formData.append('sourceId', sourceId);
    formData.append('source', source);

    mutation.mutate(formData);
  };

  return {
    onSaveFile,
    isLoading: mutation.isLoading
  };
};

export const useDeleteMutationFile = (onSuccess = () => {}) =>
  useMutation((url) => axiosDELETE({ url }), {
    onSuccess
  });

export const useGETMutationFile = ({
  headers = {},
  params = {},
  responseType = 'json',
  onSuccess = () => {},
  onError = () => {}
}) =>
  useMutation(
    (data) => axiosGET({ url: data, params, headers, responseType }),
    {
      onSuccess,
      onError
    }
  );

export const useGetFile = ({ source, id, onSuccess }) =>
  useGET({
    url: `${API_FILES}/${source}/${id}`,
    enable: isValid(source) && isValid(id),
    responseType: 'blob',
    onSuccess
  });
