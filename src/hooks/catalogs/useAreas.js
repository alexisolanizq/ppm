import IconAdd from '@Component/common/icon/IconAdd';
import AreasColumns from '@Pages/catalogs/areas/AreasColumns';
import useModal from '@Hooks/common/useModal';
import { useAreaListService } from '@Services/areas/useAreaService'
import React, { useState } from 'react'
import AreasFormulario from '@Pages/catalogs/areas/AreasFormulario';
import { isValid } from '@Utils/values';

const useAreas = () => {
  const [row, setRow] = useState(null)
  const {isOpen, openModal, closeModal} = useModal()

  // api
  const { data: areas, isLoading } = useAreaListService()

  const onEdit = (data) => {
    setRow(data)
    openModal()
  }

  const onCancel = () => {
    setRow(null)
    closeModal()
  }

  const columns = AreasColumns({onEdit})

  const actions = [
    <IconAdd onClick={openModal}/>
  ]

  const areasFormulario =()=>
  (
      <AreasFormulario
      onEnd= {onCancel}
      isUpdate={isValid(row)}
      row={row}
      onCancel={onCancel}
      />
    )

  return {
    areas,
    isLoading,
    columns,
    actions,
    isOpen,
    onCancel,
    row,
    areasFormulario
  }
}

export default useAreas