import { API_CURRENCIES } from '@Const/constUrls';
import { STORE_CURRENCY } from '@Const/store';
import {
  addCurrency,
  setCurrencyList,
  updateCurrency
} from '@Redux/catalogs/currencySlice';
import {
  useAddService,
  useListadoActiveService,
  useListadoService,
  useUpdateService
} from '@Services/useService';

export const useCurrencyService = () =>
  useListadoService({
    url: API_CURRENCIES,
    store: STORE_CURRENCY,
    onSaveList: setCurrencyList,
    listadoName: 'currency'
  });

export const useAddCurrencyService = () =>
  useAddService({
    url: API_CURRENCIES,
    onSaveRow: addCurrency
  });

export const useUpdateCurrencyService = (id) =>
  useUpdateService({
    url: `${API_CURRENCIES}/${id}`,
    onSaveRow: updateCurrency
  });

export const useCurrencyActiveService = () =>
  useListadoActiveService({
    service: useCurrencyService,
    status: 'currStatus'
  });
