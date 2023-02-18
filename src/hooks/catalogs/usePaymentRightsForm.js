import { DB_CURRENCY_ID_PESOS } from "@Const/db"
import useModal from "@Hooks/common/useModal"
import { useAreaActiveListService } from "@Services/areas/useAreaService"
import { useCurrencyActiveService } from "@Services/currency/useCurrencyService"
import { usePaymentRightAddService, usePaymentRightUpdateService } from "@Services/paymentRights/usePaymentRightsServices"
import { useForm } from "react-hook-form"

const DEFAULT_VALUES = {
  pariStatus: true,
  pariDiscount: false,
  pariMultipleRecord: false,
  currency: {
    currId: DB_CURRENCY_ID_PESOS
  }
}

const usePaymentRightsForm = ({ row, isUpdate, onEnd }) => {
  const areasModal = useModal() 
  const currencyModal = useModal()

  const {control, handleSubmit, formState: { errors }} = useForm({
    defaultValues: row ?? DEFAULT_VALUES
  })

  const {data: areas, isLoading: isLoadingAreas} = useAreaActiveListService()
  const {data: currencies, isLoading: isLoadingCurrency} = useCurrencyActiveService()
  const addMutation = usePaymentRightAddService()
  const updateMutation = usePaymentRightUpdateService(row?.pariId)

  const onSubmit = async (body) => {
    if (isUpdate) {
      await updateMutation.mutateAsync(body)
    } else {
      await addMutation.mutateAsync({
        ...body,
        currency: currencies.find(f => f.currId === body.currency.currId),
        jobArea: areas.find(f => f.joaId === body.jobArea.joaId)
      });
    }
    
    onEnd()
  };

  const isLoading = isLoadingAreas || isLoadingCurrency
  const isLoadingMutation = updateMutation.isLoading || addMutation.isLoading

  return {
    control,
    handleSubmit,
    onSubmit,
    isLoading,
    areas,
    areasModal,
    currencies,
    currencyModal,
    isLoadingMutation,
    errors
  }
}

export default usePaymentRightsForm