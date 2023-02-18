import { GridLinkOperator } from '@mui/x-data-grid';

// eslint-disable-next-line import/prefer-default-export
export const filterStatus = (nameStatus) => ({
  items: [
    { id: 1, columnField: nameStatus, operatorValue: 'is', value: 'true' }
  ],
  linkOperator: GridLinkOperator.And
});

export const sorting = (field, sort = 'asc') => ({
  sortModel: [{ field, sort }]
});