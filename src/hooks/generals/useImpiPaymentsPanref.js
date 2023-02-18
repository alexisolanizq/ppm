import useProcedureHoldersService from '@Services/procedureHolders/useProcedureHoldersService'
import { useEffect, useState } from 'react'
import { VALUE_EVENT_ENTER } from '@Const/const';

const useImpiPaymentsPanref = ({ onChange, panrefDefault = null }) => {
  const [panref, setPanref] = useState('')

  const procedureHolder = useProcedureHoldersService(panrefDefault ?? panref)

  useEffect(() => {
    if (procedureHolder.isError) {
      onChange(null)
    }

    if (procedureHolder.isSuccess) {
      onChange(procedureHolder.data[0].procedure.procId)
    }
  }, [procedureHolder.isError, procedureHolder.isSuccess])

  
  const onKeyDown = (event) => {
    if (event.key === VALUE_EVENT_ENTER) {
      event.preventDefault()
      setPanref(event.target.value)
    }
  }

  return {
    procedureHolder,
    onKeyDown,
  }
}

export default useImpiPaymentsPanref