export const getErrorValue = (inputError, errors) => !!(errors && inputError === '');
export const getHelperText = (inputError, resultA, resultB) => {
  if (inputError) {
    return resultA;
  }
  return resultB;
};