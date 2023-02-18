import { API_TOKEN_ID } from '@Const/constUrls';
import { STORAGE_AUTH } from '@Const/storage';
import { useGETMutation } from '@Utils/api';
import { setStorage } from '@Utils/storage';

const useAuthService = () =>
  useGETMutation({
    url: API_TOKEN_ID,
    onSuccess: (response) => {
      setStorage(STORAGE_AUTH, response)
    },
  });

export default useAuthService;
