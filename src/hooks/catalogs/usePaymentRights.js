import IconAdd from '@Component/common/icon/IconAdd'
import IconExport from '@Component/common/icon/IconExport'
import useModal from '@Hooks/common/useModal'
import PaymentRightsColumns from '@Pages/catalogs/paymentRights/PaymentRightsColumns'
import { usePaymentRightsListService } from '@Services/paymentRights/usePaymentRightsServices'
import React, { useState } from 'react'

const usePaymentRights = () => {
  const [row, setRow] = useState(null)
  const addModal = useModal()

  const {data, isLoading} = usePaymentRightsListService()

  const onEdit = (item) => {
    setRow(item)
    addModal.openModal()
  }

  const onCancel = () => {
    setRow(null)
    addModal.closeModal()
  }

  const columns = PaymentRightsColumns({ onEdit })
  const actions = [
    <IconExport />,
    <IconAdd onClick={addModal.openModal}/>
  ]

  return {
    data,
    isLoading,
    columns,
    actions,
    addModal,
    onCancel,
    row
  }
}

export default usePaymentRights