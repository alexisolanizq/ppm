import { API_CONTACTS } from '@Const/constUrls';
import { STORE_CONTACTS } from '@Const/store';
import { setContacts, setIdContact } from '@Redux/generals/contactSlice';
import { useListadoService, useRowService } from '@Services/useService';
import { usePOST } from '@Utils/api';

export const useListadoContactService = () =>
  useListadoService({
    store: STORE_CONTACTS,
    onSaveList: setContacts,
    url: API_CONTACTS,
    listadoName: STORE_CONTACTS
  });

export const useAddContact = (onError = () => {}) => usePOST({
  url: API_CONTACTS,
  onError
})

export const useRowContactService = (id) => useRowService({
  url: `${API_CONTACTS}/${id}`,
  store: STORE_CONTACTS,
  rowName: 'contact',
  onSaveRow: setContacts,
  onSaveId: setIdContact,
  id
})
