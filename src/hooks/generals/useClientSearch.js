import React, { useState } from 'react'
import { useSearchClientService } from '@Services/client/useClientService';
import { LINK_CLIENT_ADD } from '@Const/links';
import IconExport from '@Component/common/icon/IconExport';
import IconAdd from '@Component/common/icon/IconAdd';

const useClientSearch = () => {
  const [clientsFilter, setClientsFilter] = useState([])

  // api
  const mutationSearch = useSearchClientService()

  // functions
  const onSearchClients = async (value) => {
    const response = await mutationSearch.mutateAsync({ attribute: value })
    setClientsFilter(response)
  }

  const onClickExport = () => {
    console.log('upload')
  }


  const actionsToolbar = [
    <IconExport onClick={onClickExport}/>,
    <IconAdd to={LINK_CLIENT_ADD}/>,
  ]

  const {isLoading, isSuccess} = mutationSearch

  return {
    actionsToolbar,
    clientsFilter,
    isLoading,
    isSuccess,

    // functions
    onSearchClients
  }
}

export default useClientSearch