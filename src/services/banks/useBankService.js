import { STORE_BANKS } from "@Const/store";
import { API_BANKS } from "@Const/constUrls";

import { setBanks, addBank, updateBank } from "@Redux/catalogs/bankSlice";

import { useAddService, useListadoService, useUpdateService } from "@Services/useService";

export const useBankService = () => useListadoService({
  url: API_BANKS,
  onSaveList: setBanks,
  store: STORE_BANKS,
  listadoName: 'banksList'
})

export const useBankAddService = (onSuccess = () => {}) => useAddService({
  url: API_BANKS,
  onSaveRow: addBank,
  onSuccess
})

export const useBankUpdateService = (id, onSuccess = () => {}) => useUpdateService({
  url: `${API_BANKS}/${id}`,
  onSaveRow: updateBank,
  onSuccess
})
