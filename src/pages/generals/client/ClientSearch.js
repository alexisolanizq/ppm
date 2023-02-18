import React from 'react';
import { PAGE_TITLE_CLIENT } from '@Const/generals';
import SearchList from '@Component/common/search/SearchList';
import ToolbarGeneral from '@Component/common/toolbar/ToolbarGeneral';
import useClientSearch from '@Hooks/generals/useClientSearch';
import { CardAgent } from '@Component/common/card';
import GeneralLayout from '@Component/layout/GeneralLayout';
import Text from '@Component/common/text/Text';
import GridLayout from '@Component/common/grid/GridLayout';

const ClientSearch = () => {
  const {
    actionsToolbar,
    clientsFilter,
    onSearchClients,
    isLoading,
    isSuccess
  } = useClientSearch();

  return (
    <GeneralLayout title={PAGE_TITLE_CLIENT}>
      <SearchList onSearch={onSearchClients} />
      <ToolbarGeneral actions={actionsToolbar}>
        <Text>
          {isSuccess && `${clientsFilter.length} coincidencias encontradas`}
        </Text>
      </ToolbarGeneral>
      <GridLayout
        isEmpty={isSuccess && clientsFilter.length === 0}
        isLoading={isLoading}
      >
        {clientsFilter.map((item) => (
          <CardAgent key={`card-agent-${item.ageId}`} agent={item} />
        ))}
      </GridLayout>
    </GeneralLayout>
  );
};

export default ClientSearch;
