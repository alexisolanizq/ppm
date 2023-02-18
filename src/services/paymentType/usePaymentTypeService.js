import { API_PAYMENT_TYPE } from "@Const/constUrls"
import { STORE_PAYMENT_TYPE } from "@Const/store"
import { setPaymentType } from "@Redux/catalogs/paymentTypeSlice"
import { useListadoService } from "@Services/useService"

const usePaymentTypeService = () => useListadoService({
  store: STORE_PAYMENT_TYPE,
  onSaveList: setPaymentType,
  url: API_PAYMENT_TYPE
})

export default usePaymentTypeService