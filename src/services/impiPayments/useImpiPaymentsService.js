import { API_IMPI_PAYMENTS, API_IMPI_PAYMENTS_LISTS_LIST } from '@Const/constUrls';
import { STORE_IMPI_PAYMENTS } from '@Const/store';
import { addImpiPayment, setImpiPayments, updateImpiPayment } from '@Redux/generals/impiPaymentSlice';
import {useAddService, useListadoService, useUpdateService} from '@Services/useService';

export const useListadoImpiPaymentsService = () =>
  useListadoService({
    store: STORE_IMPI_PAYMENTS,
    onSaveList: setImpiPayments,
    url: API_IMPI_PAYMENTS
  });

export const useAddImpiPaymentsService = () => useAddService({
    url: API_IMPI_PAYMENTS,
    onSaveRow: addImpiPayment,
    isToastMessage: false
  })

export const useUpdateImpiPaymentsService = ({
  onSuccess = () => {}
}) => useUpdateService({
    url: API_IMPI_PAYMENTS,
    onSaveRow: updateImpiPayment,
    onSuccess
  })

export const useAddImpiPaymentsListsList = (onSuccess = () => {}) => useAddService({
  url: API_IMPI_PAYMENTS_LISTS_LIST,
  onSuccess
})