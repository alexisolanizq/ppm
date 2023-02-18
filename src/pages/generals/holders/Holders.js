import React from 'react';
import useHolders from '@Hooks/generals/useHolders';
import { SEARCH_GENERAL_HOLDERS } from '@Const/generals';
import holders from '@Pages/generals/holders/holderData.json';
import { MATCHES_FOUND } from '@Const/const';
import GeneralLayout from '@Component/layout/GeneralLayout';
import Grid from '@Component/common/grid/Grid';
import SearchList from '@Component/common/search/SearchList';
import ToolbarGeneral from '@Component/common/toolbar/ToolbarGeneral';
import Text from '@Component/common/text/Text';
import CardHolder from '@Component/common/card/CardHolder';

const Holders = () => {
  const {
    // holders,
    getHolders,
    openTooltip,
    actionsHolderToolbar,
    toggleTooltipClick
  } = useHolders();

  const onSearchHolders = (data) => {
    getHolders(data);
  };

  return (
    <GeneralLayout title={SEARCH_GENERAL_HOLDERS}>
      <SearchList onSearch={onSearchHolders} />
      <ToolbarGeneral actions={actionsHolderToolbar}>
        <Text>
          {holders.length} {MATCHES_FOUND}
        </Text>
      </ToolbarGeneral>
      <Grid gap={24} className="py-4">
        {holders.map((holder, index) => (
          <CardHolder
            index={index}
            holder={holder}
            key={holder.holId}
            openTooltip={openTooltip}
            toggleTooltipClick={toggleTooltipClick}
          />
        ))}
      </Grid>
    </GeneralLayout>
  );
};

export default Holders;
