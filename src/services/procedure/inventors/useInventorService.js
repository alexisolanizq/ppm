import { STORE_INVENTORS } from '@Const/store';
import {
  useAddService,
  useListadoService,
  useUpdateService
} from '@Services/useService';
import {
  API_INVENTORS,
  API_PROCEDURE_INVENTORS
} from '@Const/constUrls';
import {
  addInventor,
  setInventorList,
  updateInventor
} from '@Redux/generals/inventorSlice';

export const useInventorService = (id) =>
  useListadoService({
    url: `${API_PROCEDURE_INVENTORS}/${id}${API_INVENTORS}`,
    store: STORE_INVENTORS,
    onSaveList: setInventorList,
    listadoName: 'inventors'
  });

export const useAddInventorService = () =>
  useAddService({
    url: API_PROCEDURE_INVENTORS,
    onSaveRow: addInventor
  });

export const useAddMultipleInventorsService = () =>
  useAddService({
    url: `${API_PROCEDURE_INVENTORS}/bulk-import`,
    onSaveRow: addInventor
  });

export const useUpdateInventorService = (id) =>
  useUpdateService({
    url: `${API_PROCEDURE_INVENTORS}/${id}`,
    onSaveRow: updateInventor
  });
