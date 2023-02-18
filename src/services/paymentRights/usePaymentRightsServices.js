import { API_PAYMENT_RIGHTS } from "@Const/constUrls"
import { STORE_PAYMENT_RIGHT } from "@Const/store"
import { addPaymentRight, setPaymentRights, updatePaymentRight } from "@Redux/catalogs/paymentRightSlice"
import { useAddService, useListadoService, useUpdateService } from "@Services/useService"

export const usePaymentRightsListService = () => useListadoService({
  store: STORE_PAYMENT_RIGHT,
  onSaveList: setPaymentRights,
  url: API_PAYMENT_RIGHTS
})

export const usePaymentRightAddService = () =>
  useAddService({
    url: API_PAYMENT_RIGHTS,
    onSaveRow: addPaymentRight
  });

  export const usePaymentRightUpdateService = (id) =>
  useUpdateService({
    url: `${API_PAYMENT_RIGHTS}/${id}`,
    onSaveRow: updatePaymentRight
  });