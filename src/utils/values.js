export const isUndefined = (value) => value === undefined;
export const isValid = (value) =>
  value !== undefined && value !== null && value !== 0;
export const isNull = (value) => value === null;
export const isInvalid = (value) =>
  value === null || value === undefined || value === 0;
export const isEmpty = (value) => value === null || value === undefined;
export const isEmptyObject = (obj) =>
  obj &&
  Object.keys(obj).length === 0 &&
  Object.getPrototypeOf(obj) === Object.prototype;

export const isValidArray = (array) =>
  !isNull(array) && !isUndefined(array) && array.length > 0;
export const isString = (value) => typeof value === 'string';
export const isNumber = (value) => typeof value === 'number';
export const getValuesById = (arrayValues, id, findValue = id) =>
  arrayValues.find((item) => item[id] === findValue);
export const isValidString = (string) => string !== '' && string !== ' ' 