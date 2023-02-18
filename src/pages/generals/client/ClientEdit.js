import GeneralLayout from '@Component/layout/GeneralLayout'
import { PAGE_TITLE_UPDATE_CLIENT } from '@Const/generals'
import { WIDTH } from '@Const/styles'
import useClientEdit from '@Hooks/generals/useClientEdit'
import React from 'react'
import ClientForm from './ClientForm'

const ClientEdit = () => {
  const { isLoading, prevLinks, onEnd, agent } = useClientEdit()

  return (
    <GeneralLayout
      isLoading={isLoading}
      prevLinks={prevLinks}
      maxWidth={WIDTH.form}
      title={PAGE_TITLE_UPDATE_CLIENT}
    >
      <ClientForm isUpdate row={agent} onEnd={onEnd} onCancel={onEnd}/>
    </GeneralLayout>
  )
}

export default ClientEdit