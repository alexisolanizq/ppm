import { STORE_TEMP_REPOSITORY_FOLDER } from '@Const/store';
import { API_TMP_REPO_FOLDERS } from '@Const/constUrls';

import {
  setTempRepositoryFolders,
  addTempRepositoryFolder,
  updateTempRepositoryFolder
} from '@Redux/catalogs/tempRepositoryFoldersSlice';

import {
  useAddService,
  useListadoService,
  useUpdateService
} from '@Services/useService';

export const useTempRepositoryFolderService = () =>
  useListadoService({
    url: API_TMP_REPO_FOLDERS,
    onSaveList: setTempRepositoryFolders,
    store: STORE_TEMP_REPOSITORY_FOLDER,
    listadoName: 'tempRepositoryFolders'
  });

export const useTempRepositoryFolderAddService = (onSuccess = () => {}) =>
  useAddService({
    url: API_TMP_REPO_FOLDERS,
    onSaveRow: addTempRepositoryFolder,
    onSuccess
  });

export const useTempRepositoryFolderUpdateService = (
  id,
  onSuccess = () => {}
) =>
  useUpdateService({
    url: `${API_TMP_REPO_FOLDERS}/${id}`,
    onSaveRow: updateTempRepositoryFolder,
    onSuccess
  });
