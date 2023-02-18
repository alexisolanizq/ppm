import { APP_DEBUG, GOOGLE_CLIENT_ID } from '@Const/config';
import { gapi } from 'gapi-script';
import { showToastError } from '@Utils/toast';
import { LINK_MAIL_GOOGLE, MESSAGE_ERROR } from '@Const/const';
import useAuthService from '@Services/auth/useAuthService';
import { useEffect } from 'react';
import { isValidAuth } from '@Utils/auth';

const useAuth = () => {
  const clientId = GOOGLE_CLIENT_ID;
  const isValid = isValidAuth()

  const mutation = useAuthService()

  const initGoogleLogin = () => {
    const start = () => {
      gapi.client.init({
        clientId,
        scope: ''
      });
    };

    gapi.load('client:auth2', start);
  };

  const onGoogleSuccess = ({ code }) => {
    const params = {
      scope: LINK_MAIL_GOOGLE,
      code,
      develop: !APP_DEBUG
    }
    mutation.mutate(params)
  }

  const onGoogleFailure = () => showToastError(MESSAGE_ERROR)

  useEffect(() => {
    initGoogleLogin();
  }, [])
  

  return {
    clientId,
    onGoogleSuccess,
    onGoogleFailure,
    isValid
  }
}

export default useAuth