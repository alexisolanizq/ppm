import { API_JOBAREA_MANAGEMENTS } from '@Const/constUrls';
import { STORE_AREA_MANAGEMENTS } from '@Const/store';
import {
  addAreaManagement,
  setAreaManagements,
  updateAreaManagement
} from '@Redux/catalogs/areaManagementSlice';
import {
  useAddService,
  useListadoActiveService,
  useListadoService,
  useUpdateService
} from '@Services/useService';

export const useAreaManagementListService = () =>
  useListadoService({
    url: API_JOBAREA_MANAGEMENTS,
    store: STORE_AREA_MANAGEMENTS,
    onSaveList: setAreaManagements,
    listadoName: 'areaManagements'
  });

export const useAddAreaManagementService = () =>
  useAddService({
    url: API_JOBAREA_MANAGEMENTS,
    onSaveRow: addAreaManagement
  });

export const useUpdateAreaManagementService = (id) =>
  useUpdateService({
    url: `${API_JOBAREA_MANAGEMENTS}/${id}`,
    onSaveRow: updateAreaManagement
  });

export const useAreaManagementsActiveService = () =>
  useListadoActiveService({
    service: useAreaManagementListService,
    status: 'jaiaStatus'
  });
