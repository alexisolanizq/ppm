import { API_SUB_MANAGEMENTS } from '@Const/constUrls';
import { STORE_SUBMANAGEMENTS } from '@Const/store';
import {
  addSubManagement,
  setSubManagements,
  updateSubManagement
} from '@Redux/catalogs/subManagementSlice';
import {
  useAddService,
  useListadoActiveService,
  useListadoService,
  useUpdateService
} from '@Services/useService';

export const useSubManagementListService = () =>
  useListadoService({
    url: API_SUB_MANAGEMENTS,
    store: STORE_SUBMANAGEMENTS,
    onSaveList: setSubManagements,
    listadoName: 'subManagements'
  });

export const useAddSubManagementService = () =>
  useAddService({
    url: API_SUB_MANAGEMENTS,
    onSaveRow: addSubManagement
  });

export const useUpdateSubManagement = (id) =>
  useUpdateService({
    url: `${API_SUB_MANAGEMENTS}/${id}`,
    onSaveRow: updateSubManagement
  });

export const useSubManagementActiveService = () =>
  useListadoActiveService({
    service: useSubManagementListService,
    status: 'imsuStatus'
  });
