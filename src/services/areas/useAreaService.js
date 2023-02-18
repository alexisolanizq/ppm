import {
  API_JOB_AREAS,
} from '@Const/constUrls';
import { STORE_AREAS } from '@Const/store';
import {
  addArea,
  setAreas,
  updateArea,
} from '@Redux/catalogs/areaSlice';
import {
  useAddService,
  useListadoActiveService,
  useListadoService,
  useUpdateService
} from '@Services/useService';

export const useAreaListService = () =>
  useListadoService({
    url: API_JOB_AREAS,
    onSaveList: setAreas,
    store: STORE_AREAS,
    listadoName: 'areas'
  });

export const useAreaActiveListService = () =>
  useListadoActiveService({
    service: useAreaListService,
    status: 'joaStatus'
  });

export const useAreaAddService = () =>
  useAddService({
    url: API_JOB_AREAS,
    onSaveRow: addArea
  });

export const useAreaUpdateService = (id) =>
  useUpdateService({
    url: `${API_JOB_AREAS}/${id}`,
    onSaveRow: updateArea
  });
