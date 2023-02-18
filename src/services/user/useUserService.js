import { API_USERS } from '@Const/constUrls';
import { STORE_USERS } from '@Const/store';
import {
  setIdUser,
  setUser,
  setUsers,
  updateUser
} from '@Redux/catalogs/userSlice';
import {
  useListadoActiveService,
  useListadoService,
  useRowService,
  useUpdateService
} from '@Services/useService';
import { useGET, usePOST } from '@Utils/api';

export const useUserListService = () =>
  useListadoService({
    url: `${API_USERS}/list`,
    onSaveList: setUsers,
    store: STORE_USERS,
    listadoName: 'users'
  });

export const useUserListActiveService = () =>
  useListadoActiveService({
    service: useUserListService,
    status: 'usrStatus'
  });

export const useUserListActiveExceptUserIdService = (usrId) => {
  const { data, isLoading } = useUserListActiveService();

  return {
    isLoading,
    data: data.filter((f) => f.usrId !== usrId)
  };
};

export const useUserRowService = (id) =>
  useRowService({
    url: `${API_USERS}/${id}`,
    store: STORE_USERS,
    rowName: 'user',
    onSaveRow: setUser,
    onSaveId: setIdUser,
    id
  });

export const useUserRowGetService = (id) => useGET({
  url: `${API_USERS}/${id}`,
  nameQuery: `rowUser${id}`
})

export const useUserAddService = () => usePOST({
  url: API_USERS,
})

export const useUserUpdateService = (id) =>
  useUpdateService({
    url: `${API_USERS}/${id}`,
    store: STORE_USERS,
    onSaveRow: updateUser,
    onSaveRowOne: setUser
  });

export const useUserByEmployee = (empId) => useGET({
  url: `${API_USERS}/emp/${empId}`,
})