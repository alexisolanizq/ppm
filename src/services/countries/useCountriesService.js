import { STORE_COUNTRY } from '@Const/store';
import { API_COUNTRIES } from '@Const/constUrls';

import {
  setCountries,
  addCountry,
  updateCountry
} from '@Redux/catalogs/countriesSlice';
import {
  useListadoActiveService,
  useListadoService,
  useAddService,
  useUpdateService,
  useRowUpdateService
} from '@Services/useService';

export const useCountriesLiestadoService = () =>
  useListadoService({
    store: STORE_COUNTRY,
    url: API_COUNTRIES,
    onSaveList: setCountries,
    listadoName: 'countries'
  });

export const useCountriesActiveListService = () =>
  useListadoActiveService({
    service: useCountriesLiestadoService,
    status: 'counStatus'
  });

export const useCountryAddService = (onSuccess = () => {}) =>
  useAddService({
    url: API_COUNTRIES,
    onSaveRow: addCountry,
    onSuccess
  });

export const useCountryUpdateService = (id, onSuccess = () => {}) =>
  useUpdateService({
    url: `${API_COUNTRIES}/${id}`,
    onSaveRow: updateCountry,
    onSuccess
  });

export const useCountryRowUpdateService = (onSuccess = () => {}) =>
  useRowUpdateService({
    onSaveRow: updateCountry,
    onSuccess
  });
