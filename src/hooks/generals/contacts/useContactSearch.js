import React, { useState } from 'react';
import { LINK_CLIENT, LINK_CONTACT_ADD } from '@Const/links';
import IconAdd from '@Component/common/icon/IconAdd';
import IconExport from '@Component/common/icon/IconExport';
import { useListadoContactService } from '@Services/contact/useContactService';
import FilterSearch from '@Component/common/filter/FilterSearch';

const useContactSearch = () => {
  const { data: contacts } = useListadoContactService();
  const [contactsFilter, setContactsFilter] = useState(contacts);

  const onSearchContacts = (value) => {
    if (value !== '') {
      setContactsFilter(
        contacts.filter(
          ({ conName, conFirstName, conLastName }) =>
            conName.toLowerCase().includes(value.toLowerCase()) ||
            conFirstName.toLowerCase().includes(value.toLowerCase()) ||
            conLastName.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setContactsFilter(contacts);
    }
  };


  const prevLinks = [{ link: `${LINK_CLIENT}/1244`, nombre: 'Coppel' }];

  const onClickUpload = () => {};

  const actionsToolbar = [
    <FilterSearch onSearch={onSearchContacts} />,
    <IconExport onClick={onClickUpload} />,
    <IconAdd to={LINK_CONTACT_ADD} />
  ];

  return {
    contactsFilter,
    onSearchContacts,
    actionsToolbar,
    contacts,
    prevLinks
  };
};

export default useContactSearch;
