import { API_JOBAREA_MANAGEMENT_SUBMANAGEMENTS } from '@Const/constUrls';
import { STORE_AREA_MANAGEMENT_SUBMANAGEMENTS } from '@Const/store';
import { addareaManagementSubManagement, setAreaManagementSubManagements, updateareaManagementSubManagement } from '@Redux/catalogs/areaManagementSubManagementSlice';
import {
  useAddService,
  useListadoActiveService,
  useListadoService,
  useUpdateService
} from '@Services/useService';

export const useAreaManagementSubManagementListService = () =>
  useListadoService({
    url: API_JOBAREA_MANAGEMENT_SUBMANAGEMENTS,
    store: STORE_AREA_MANAGEMENT_SUBMANAGEMENTS,
    onSaveList: setAreaManagementSubManagements,
    listadoName: 'areaManagementSubManagements'
  });

export const useAddAreaManagementSubManagementService = () =>
  useAddService({
    url: API_JOBAREA_MANAGEMENT_SUBMANAGEMENTS,
    onSaveRow: addareaManagementSubManagement
  });

export const useUpdateAreaManagementSubManagement = (id) =>
  useUpdateService({
    url: `${API_JOBAREA_MANAGEMENT_SUBMANAGEMENTS}/${id}`,
    onSaveRow: updateareaManagementSubManagement
  });

export const useSubManagementActiveService = () =>
  useListadoActiveService({
    service: useAreaManagementSubManagementListService,
    status: 'imsuStatus'
  });
