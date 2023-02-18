import GeneralLayout from '@Component/layout/GeneralLayout'
import useOfficeDetail from '@Hooks/generals/useOfficeDetail'
import React from 'react'
import OfficeDetailContent from './OfficeDetailContent'

const OfficeDetail = () => {
  const { isLoading, prevLinks, actions, sidebar, office } = useOfficeDetail()
  return (
    <GeneralLayout
      title={office?.offName}
      isLoading={isLoading}
      prevLinks={prevLinks}
      actions={actions}
      isHideTitle
    >
      <GeneralLayout.Sidebar sidebar={sidebar}>
        <OfficeDetailContent office={office}/>
      </GeneralLayout.Sidebar>
    </GeneralLayout>
  )
}

export default OfficeDetail