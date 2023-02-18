import { GET_REFERENCE_TYPES } from '@Const/constUrls';
import { STORE_REFERENCE_TYPES } from '@Const/store';
import { setReferenceTypes } from '@Redux/catalogs/referenceTypeSlice';
import { useListadoService } from '@Services/useService';

// eslint-disable-next-line import/prefer-default-export
export const useListReferenceTypeService = () =>
  useListadoService({
    url: GET_REFERENCE_TYPES,
    onSaveList: setReferenceTypes,
    store: STORE_REFERENCE_TYPES,
    listadoName: 'referenceTypes'
  });
