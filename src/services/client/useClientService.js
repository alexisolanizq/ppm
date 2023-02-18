import { API_CLIENT, API_CLIENT_SEARCH, API_CLIENT_UPDATE_ADM_STATUS } from "@Const/constUrls";
import { STORE_CLIENT } from "@Const/store";
import { addClient, setClient, setClients, setIdClient, updateClient, updateRowClient } from "@Redux/generals/clientSlice";
import { useAddService, useListadoService, useRowService, useUpdateService } from "@Services/useService";
import { usePOST } from "@Utils/api";

export const useListadoClientService = () =>
useListadoService({
  store: STORE_CLIENT,
  onSaveList: setClients,
  url: API_CLIENT,
  listadoName: 'clients'
});

export const useSearchClientService = () => usePOST({
  url: API_CLIENT_SEARCH
})

export const useUpdateAdmStatusClientService = (id) => useUpdateService({
  url: `${API_CLIENT_UPDATE_ADM_STATUS}/${id}`,
  onSaveRow: updateClient,
  onSaveRowOne: updateRowClient
})

export const useAddClientService = (onSuccess = () => {}) => useAddService({
  url: API_CLIENT,
  onSaveRow: addClient,
  isToastMessage: false,
  onSuccess
})

export const useUpdateClientService = (id) => useUpdateService({
  url: `${API_CLIENT}/${id}`,
  onSaveRow: updateClient
})

export const useRowClientService = (id) =>  useRowService({
  url: `${API_CLIENT}/${id}`,
  store: STORE_CLIENT,
  rowName: 'client',
  onSaveRow: setClient,
  onSaveId: setIdClient,
  id
})