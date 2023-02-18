import IconAdd from '@Component/common/icon/IconAdd'
import AreasReferencesColumns from '@Pages/catalogs/areasReferences/AreasReferencesColumns'
import useModal from '@Hooks/common/useModal'
import React, { useState } from 'react'
import { useAreaReferenceListService } from '@Services/areasReference/useAreasReferenceService'

const useAreasReference = () => {
  const [row, setRow] = useState(null)
  const {isOpen, openModal, closeModal} = useModal()

  const { data: areasReferences, isLoading } = useAreaReferenceListService()

  const onEdit = (data) => {
    setRow(data)
    openModal()
  }

  const onCancel = () => {
    setRow(null)
    closeModal()
  }

  const columns = AreasReferencesColumns({onEdit})

  const actions = [
    <IconAdd onClick={openModal}/>
  ]

  return {
    areasReferences,
    isLoading,
    columns,
    onCancel,
    actions,
    isOpen,
    row
  }

}

export default useAreasReference