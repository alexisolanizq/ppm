import { API_COUNTRIES_LANGUAGES } from "@Const/constUrls";
import { STORE_COUNTRY_LANGUAGES } from "@Const/store";
import { addCountriesLanguages, setCountriesLanguages, updateCountryLanguage } from "@Redux/catalogs/countryLanguagesSlice";
import { useAddService, useListadoService, useUpdateService } from "@Services/useService";

export const useCountryLanguageListService = () => useListadoService({
  url: API_COUNTRIES_LANGUAGES,
  onSaveList: setCountriesLanguages,
  store: STORE_COUNTRY_LANGUAGES,
  listadoName: 'countriesLanguages'
})

export const useCountryLanguageAddService = () => useAddService({
  url: API_COUNTRIES_LANGUAGES,
  onSaveRow: addCountriesLanguages
})

export const useCountryLanguageUpdateService = (id) => useUpdateService({
  url: `${API_COUNTRIES_LANGUAGES}/${id}`,
  onSaveRow: updateCountryLanguage,
})