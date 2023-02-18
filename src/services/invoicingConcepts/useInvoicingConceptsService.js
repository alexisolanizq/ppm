import { STORE_INVOICING_CONCEPTS } from '@Const/store';
import { API_INVOICING_CONCEPTS } from '@Const/constUrls';

import {
  setInvoicingConcepts,
  addInvoicingConcept,
  updateInvoicingConcept
} from '@Redux/catalogs/invoicingConceptsSlice';

import {
  useAddService,
  useListadoService,
  useUpdateService
} from '@Services/useService';

export const useInvoicingConceptService = () =>
  useListadoService({
    url: API_INVOICING_CONCEPTS,
    onSaveList: setInvoicingConcepts,
    store: STORE_INVOICING_CONCEPTS,
    listadoName: 'invoicingConcepts'
  });

export const useInvoicingConceptAddService = (onSuccess = () => {}) =>
  useAddService({
    url: API_INVOICING_CONCEPTS,
    onSaveRow: addInvoicingConcept,
    onSuccess
  });

export const useInvoicingConceptUpdateService = (id, onSuccess = () => {}) =>
  useUpdateService({
    url: `${API_INVOICING_CONCEPTS}/${id}`,
    onSaveRow: updateInvoicingConcept,
    onSuccess
  });
