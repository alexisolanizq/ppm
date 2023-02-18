import { API_POSTAL_CODE } from '@Const/constUrls';
import { useGET } from '@Utils/api';
import { isValid } from '@Utils/values';

// eslint-disable-next-line import/prefer-default-export
export const usePostalCodeService = ({
  postalCode,
  onSuccess = () => {},
  onError = () => {}
}) =>
  useGET({
    url: `${API_POSTAL_CODE}/${postalCode}`,
    enable: isValid(postalCode) && postalCode.length === 5,
    onSuccess,
    onError
  });
