import { API_HOLDER_LIST } from "@Const/constUrls";
import { STORE_HOLDERS } from "@Const/store";
import { addHolder, setHolders } from "@Redux/generals/holderSlice";
import { useAddService, useListadoService } from "@Services/useService";


export const useListadoHolderService = () => useListadoService({
    store: STORE_HOLDERS,
    onSaveList: setHolders,
    url: API_HOLDER_LIST,
    listadoName: 'holders'
})

export const useAddHolderService = (onSuccess = () => {}) => useAddService({
    url: API_HOLDER_LIST,
    onSaveRow: addHolder,
    isToastMessage: false,
    onSuccess
})