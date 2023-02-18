import GeneralLayout from '@Component/layout/GeneralLayout'
import { PAGE_TITLE_ADD_CLIENT } from '@Const/generals'
import { WIDTH } from '@Const/styles'
import useClientAdd from '@Hooks/generals/useClientAdd'
import React from 'react'
import ClientForm from './ClientForm'

const ClientAdd = () => {
  const { onEnd, prevLinks } = useClientAdd()

  return (
    <GeneralLayout
      title={PAGE_TITLE_ADD_CLIENT}
      prevLinks={prevLinks}
      maxWidth={WIDTH.form}
    >
      <ClientForm onEnd={onEnd} onCancel={onEnd}/>
    </GeneralLayout>
  )
}

export default ClientAdd