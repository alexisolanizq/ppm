import { escapeRegExp } from 'lodash';
import { isNull } from './values';

export const filterByStatus = (list, statusName = '') => {
  const newList = [...list]
  return newList.filter((item) => item[statusName])
}

export const findById = (array, value, idName = 'id') =>
  array.find((f) => f[idName] === value);

export const cleanArray = (array, itemFind) => array.filter(f => f[itemFind])

export const findItem = (item, value) =>
  Object.keys(item).some((field) => {
    if (!isNull(item[field])) {
      if (Array.isArray(item[field])) {
        const findArray = item[field].filter((rowArray) => findItem(rowArray, value))
        return findArray.length > 0
      }

      if (typeof item[field] === 'object') {
        return findItem(item[field], value)
      }

      if (typeof item[field] === 'string' || typeof item[field] === 'number') {
        const searchRegex = new RegExp(escapeRegExp(value), 'i');
        return searchRegex.test(item[field].toString());
      }
    }

    return false;
  });

export const filterByValue = (list, value) =>
  list.filter((row) => findItem(row, value));

export const filterValues = ({
  items,
  value,
  propertyOne,
  propertyTwo = null,
  propertyThree = null
}) => {
  if (value === '') return null;

  return items.filter((item) => {
    if (propertyThree) {
      return item[propertyOne][propertyTwo][propertyThree] === value;
    }

    if (propertyTwo) {
      return item[propertyOne][propertyTwo] === value;
    }

    return item[propertyOne] === value;
  });
};
