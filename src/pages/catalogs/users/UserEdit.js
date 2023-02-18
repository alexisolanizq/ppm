import GeneralLayout from '@Component/layout/GeneralLayout'
import { UPDATE_USER } from '@Const/catalogs'
import { WIDTH } from '@Const/styles'
import useUserEdit from '@Hooks/catalogs/useUserEdit'
import React from 'react'
import UserForm from './UserForm'

const UserEdit = () => {
  const { isLoading, user, prevLinks, onEnd } = useUserEdit()
  return (
    <GeneralLayout
      isLoading={isLoading}
      prevLinks={prevLinks}
      maxWidth={WIDTH.small}
      title={UPDATE_USER}
    >
      <UserForm isUpdate row={user} onEnd={onEnd} onCancel={onEnd}/>
    </GeneralLayout>
  )
}

export default UserEdit