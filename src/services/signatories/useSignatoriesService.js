import { STORE_SIGNATORIES } from '@Const/store';
import { API_SIGNATURES } from '@Const/constUrls';

import {
  setSignatories,
  addSignatory,
  updateSignatory
} from '@Redux/catalogs/signatoriesSlice';

import {
  useAddService,
  useListadoService,
  useUpdateService
} from '@Services/useService';

export const useSignatoryService = () =>
  useListadoService({
    url: API_SIGNATURES,
    onSaveList: setSignatories,
    store: STORE_SIGNATORIES,
    listadoName: 'signatories'
  });

export const useSignatoryAddService = () =>
  useAddService({
    url: API_SIGNATURES,
    onSaveRow: addSignatory,
    isToastMessage: false
  });

export const useSignatoryUpdateService = (id) =>
  useUpdateService({
    url: `${API_SIGNATURES}/${id}`,
    onSaveRow: updateSignatory,
    isToastMessage: false
  });
