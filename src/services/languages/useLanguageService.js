import { API_LANGUAGES } from "@Const/constUrls";
import { STORE_LANGUAGES } from "@Const/store";
import { addLanguage, setLanguages, updateLanguage } from "@Redux/catalogs/languageSlice";
import { useAddService, useListadoActiveService, useListadoService, useUpdateService } from "@Services/useService";

export const useLanguageListService = () => useListadoService({
  url: API_LANGUAGES,
  onSaveList: setLanguages,
  store: STORE_LANGUAGES,
  listadoName: 'languages'
})

export const useLanguageActiveListService = () => useListadoActiveService({
  service: useLanguageListService,
  status: 'lanStatus'
})

export const useLanguageAddService = () => useAddService({
  url: `${API_LANGUAGES}/`,
  onSaveRow: addLanguage,
})

export const useLanguageUpdateService = (id) => useUpdateService({
  url: `${API_LANGUAGES}/${id}`,
  onSaveRow: updateLanguage,
})