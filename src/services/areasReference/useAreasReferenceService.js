import { API_JOBAREAS_REFERENCE_TYPES } from '@Const/constUrls';
import { STORE_AREAS_REFERENCE } from '@Const/store';
import {
  addAreaReference,
  setAreasReferences,
  updateAreaReference
} from '@Redux/catalogs/areaReferenceSlice';
import {
  useAddService,
  useListadoService,
  useUpdateService
} from '@Services/useService';

export const useAreaReferenceListService = () =>
  useListadoService({
    url: API_JOBAREAS_REFERENCE_TYPES,
    onSaveList: setAreasReferences,
    store: STORE_AREAS_REFERENCE,
    listadoName: 'areasReference'
  });

export const useAreaReferenceAddService = () =>
  useAddService({
    url: API_JOBAREAS_REFERENCE_TYPES,
    onSaveRow: addAreaReference,
    isToastMessage: false
  });

export const useAreaReferenceUpdateService = (id) =>
  useUpdateService({
    url: `${API_JOBAREAS_REFERENCE_TYPES}/${id}`,
    onSaveRow: updateAreaReference
  });
