import { API_OFFICE, API_OFFICES_AGENT } from '@Const/constUrls'
import { STORE_OFFICES } from '@Const/store'
import { addOffice, setAgentId, setOffice, setOfficeId, setOffices } from '@Redux/generals/officeSlice'
import { useAddService, useListadoByIdService, useRowService } from '@Services/useService'

export const useOfficesByAgentService = (agentId) => useListadoByIdService({
  url: `${API_OFFICES_AGENT}${agentId}`,
  onSaveId: setAgentId,
  onSaveList: setOffices,
  store: STORE_OFFICES,
  id: agentId,
  idName: 'agentId',
  listadoName: 'offices'
})

export const useAddOfficeService = () => useAddService({
  url: `${API_OFFICE}`,
  onSaveRow: addOffice
})

export const useRowOfficeService = (offId) => useRowService({
  onSaveId: setOfficeId,
  onSaveRow: setOffice,
  url: `${API_OFFICE}/${offId}`,
  store: STORE_OFFICES,
  id: offId,
  rowName: 'office'
})