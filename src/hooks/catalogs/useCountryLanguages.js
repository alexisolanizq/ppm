import IconAdd from "@Component/common/icon/IconAdd"
import React, { useState } from 'react'
import CountryLanguagesColumns from "@Pages/catalogs/countryLanguages/CountryLanguagesColumns"
import { useCountryLanguageListService } from "@Services/countryLanguage/useCountryLanguageService"
import useModal from "@Hooks/common/useModal"

const useCountryLanguages = () => {
  const modalAdd = useModal()
  const [row, setRow] = useState(null)

  const {data: countryLanguages, isLoading} = useCountryLanguageListService()
  const onEdit = (item) => {
    setRow(item)
    modalAdd.openModal()
  }

  const onCancel = () => {
    setRow(null)
    modalAdd.closeModal()
  }

  const columns = CountryLanguagesColumns({ onEdit })
  const actions = [
    <IconAdd onClick={modalAdd.openModal}/>
  ]

  return {
    countryLanguages,
    isLoading,
    columns,
    actions,
    modalAdd,
    row,
    onCancel
  }
}

export default useCountryLanguages