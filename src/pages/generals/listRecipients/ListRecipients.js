import React from 'react';

import Grid from '@Component/common/grid/Grid';
import EmptyGrid from '@Component/common/empty/EmptyGrid';
import CardRecipient from '@Component/common/card/CardRecipient';

const ListRecipients = ({ listRecipients = [] }) => {
  if (listRecipients.length === 0) return <EmptyGrid />;

  return (
    <Grid gap={24} className="py-4">
      {listRecipients.map((_recipient, index) => (
        <CardRecipient key={`card-recipient-${index}`} />
      ))}
    </Grid>
  );
};

export default ListRecipients;
