import { API_LEVEL } from "@Const/constUrls";
import { STORE_LEVEL } from "@Const/store";
import { setLevels } from "@Redux/catalogs/levelSlice";
import { useListadoService } from "@Services/useService";

// eslint-disable-next-line import/prefer-default-export
export const useLevelListService = () => useListadoService({
  url: API_LEVEL,
  onSaveList: setLevels,
  store: STORE_LEVEL,
})