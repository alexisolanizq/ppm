import { CONTACTS_TITLE } from '@Const/generals';
import { LINK_CONTACT, LINK_SEARCH_CONTACT } from '@Const/links';
import { useNavigate } from 'react-router';

const useContact = () => {
  const navigate = useNavigate();

  const prevLinks = [
    { link: LINK_CONTACT, nombre: CONTACTS_TITLE },
  ];

  const onCancel = () => navigate(LINK_SEARCH_CONTACT)

  return {
    prevLinks,
    onCancel,
  };
};

export default useContact;
