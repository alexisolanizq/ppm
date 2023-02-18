import React from 'react';
import GeneralLayout from '@Component/layout/GeneralLayout';
import useContactSearch from '@Hooks/generals/contacts/useContactSearch';
import Grid from '@Component/common/grid/Grid';
import CardContact from '@Component/common/card/CardContact';
import { DIRECTORY } from '@Const/const';
import EmptyGrid from '@Component/common/empty/EmptyGrid';

const ContactSearch = () => {
  const { actionsToolbar, contactsFilter, prevLinks } = useContactSearch();

  return (
    <GeneralLayout
      title={DIRECTORY}
      isTitleFlex
      prevLinks={prevLinks}
      actions={actionsToolbar}
    >
      {contactsFilter.length === 0 ? (
        <EmptyGrid />
      ) : (
        <Grid gap={24} className="py-4">
          {contactsFilter.map((item) => (
            <CardContact key={`card-contact-${item.conId}`} contact={item} />
          ))}
        </Grid>
      )}
    </GeneralLayout>
  );
};

export default ContactSearch;
