import { API_COUNTRY_CURRENCY } from '@Const/constUrls';
import { STORE_CURRENCY_COUNTRY } from '@Const/store';
import {
  addCountryCurrency,
  setCountryCurrencyList,
  updateCountryCurrency
} from '@Redux/catalogs/CurrencyCountrySlice';
import {
  useAddService,
  useListadoActiveService,
  useListadoService,
  useUpdateService
} from '@Services/useService';

export const useCurrencyCountryList = () =>
  useListadoService({
    url: API_COUNTRY_CURRENCY,
    store: STORE_CURRENCY_COUNTRY,
    onSaveList: setCountryCurrencyList,
    listadoName: 'currencyCountry'
  });

export const useCurrencyCountryActiveService = () =>
  useListadoActiveService({
    service: useCurrencyCountryList,
    status: 'cocuStatus'
  });

export const useAddCurrencyCountryService = () =>
  useAddService({
    url: API_COUNTRY_CURRENCY,
    onSaveRow: addCountryCurrency
  });

export const useUpdateCurrencyCountryService = (id) =>
  useUpdateService({
    url: `${API_COUNTRY_CURRENCY}/${id}`,
    onSaveRow: updateCountryCurrency
  });
