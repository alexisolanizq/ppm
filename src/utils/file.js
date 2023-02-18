import { isString, isEmpty } from '@Utils/values';

// eslint-disable-next-line import/prefer-default-export
export const getFileURL = (value) => {
  if (isEmpty(value) || isString(value)) {
    return value;
  }

  return URL.createObjectURL(value);
};
