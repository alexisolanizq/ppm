import { API_MANAGEMENTS } from '@Const/constUrls';
import { STORE_MANAGEMENTS } from '@Const/store';
import {
  addManagement,
  setManagements,
  updateManagement
} from '@Redux/catalogs/managementSlice';
import {
  useAddService,
  useListadoActiveService,
  useListadoService,
  useUpdateService
} from '@Services/useService';

export const useManagementListService = () =>
  useListadoService({
    url: API_MANAGEMENTS,
    store: STORE_MANAGEMENTS,
    onSaveList: setManagements,
    listadoName: 'managements'
  });

export const useAddManagementService = () =>
  useAddService({
    url: API_MANAGEMENTS,
    onSaveRow: addManagement
  });

export const useUpdateManagementService = (id) =>
  useUpdateService({
    url: `${API_MANAGEMENTS}/${id}`,
    onSaveRow: updateManagement
  });

  export const useManagementsActiveService = () => useListadoActiveService({
    service: useManagementListService,
    status: 'imadStatus'
  })