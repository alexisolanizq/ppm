import GeneralLayout from '@Component/layout/GeneralLayout'
import { PAGE_TITLE_OFFICE_ADD } from '@Const/generals'
import { WIDTH } from '@Const/styles'
import useOfficesAddByClient from '@Hooks/generals/useOfficesAddByClient'
import React from 'react'
import OfficeForm from './OfficeForm'

const OfficesAddByClient = () => {
  const { prevLinks, isLoading, onCancel, onSubmit, isLoadingMutation } = useOfficesAddByClient()
  return (
    <GeneralLayout 
      isLoading={isLoading}
      title={PAGE_TITLE_OFFICE_ADD}
      maxWidth={WIDTH.form}
      prevLinks={prevLinks}>
      <OfficeForm isLoadingButton={isLoadingMutation} onCancel={onCancel} onSubmit={onSubmit}/>
    </GeneralLayout>
  )
}

export default OfficesAddByClient