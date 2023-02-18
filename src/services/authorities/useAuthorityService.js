import { STORE_AUTHORITIES } from '@Const/store';
import { API_AUTHORITIES } from '@Const/constUrls';

import {
  setAuthorities,
  addAuthority,
  updateAuthority
} from '@Redux/catalogs/authoritiesSlice';

import {
  useAddService,
  useListadoService,
  useUpdateService
} from '@Services/useService';

export const useAuthorityService = () =>
  useListadoService({
    url: API_AUTHORITIES,
    onSaveList: setAuthorities,
    store: STORE_AUTHORITIES,
    listadoName: 'authorities'
  });

export const useAuthorityAddService = (onSuccess = () => {}) =>
  useAddService({
    url: API_AUTHORITIES,
    onSaveRow: addAuthority,
    onSuccess
  });

export const useAuthorityUpdateService = (id, onSuccess = () => {}) =>
  useUpdateService({
    url: `${API_AUTHORITIES}/${id}`,
    onSaveRow: updateAuthority,
    onSuccess
  });
