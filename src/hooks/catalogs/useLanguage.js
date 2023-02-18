import IconAdd from '@Component/common/icon/IconAdd'
import useModal from '@Hooks/common/useModal'
import LanguageColumns from '@Pages/catalogs/languages/LanguageColumns'
import { useLanguageListService } from '@Services/languages/useLanguageService'
import React, { useState } from 'react'

const useLanguage = () => {
  const [row, setRow] = useState(null)
  const modalAdd = useModal()

  const {data, isLoading} = useLanguageListService()

  const onEdit = (item) => {
    setRow(item)
    modalAdd.openModal()
  }

  const onCancel = () => {
    setRow(null)
    modalAdd.closeModal()
  }
  
  const columns = LanguageColumns({ onEdit })
  const actions = [
    <IconAdd onClick={modalAdd.openModal}/>
  ]

  return {
    data,
    isLoading,
    actions,
    columns,
    modalAdd,
    onCancel,
    row
  }
}

export default useLanguage