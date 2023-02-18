import React, { useState } from 'react';

import { esES, DataGrid, gridClasses } from '@mui/x-data-grid';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';

import CustomGridToolbar from './CustomToolbar';
import AlertMessage from './AlertMessage';

// import './styles.css';

const StripedDataGrid = ({
  title,
  columnsDataGrid,
  allData = [],
  rowsDataGrid,
  setRowsDataGrid,
  isLoading,
  handleShow,
  toExport,
  alertMessage,
  setAlertMessage,
  rowId = 'id',
  getRowIdData
}) => {
  const escapeRegExp = (value) =>
    value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

  const [searchText, setSearchText] = useState('');

  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    if (searchValue !== '') {
      const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
      const filteredRows = allData.filter((row) =>
        Object.keys(row).some(
          (field) =>
            row[field] !== null &&
            row[field] !== undefined &&
            !Array.isArray(row[field]) &&
            searchRegex.test(row[field].toString())
        )
      );
      setRowsDataGrid(filteredRows);
    } else {
      setRowsDataGrid(allData);
    }
  };

  return (
    <>
      {alertMessage ? (
        <AlertMessage
          alertMessage={alertMessage}
          setAlertMessage={setAlertMessage}
        />
      ) : null}
      <Box
        sx={{
          width: '100%',
          [`& .${gridClasses.row}.even`]: {
            bgcolor: (theme) => theme.palette.grey[200],
            '&:hover, &.Mui-hovered': {
              bgcolor: (theme) => alpha(theme.palette.primary.main, 0.2),
              '@media (hover: none)': {
                bgcolor: 'transparent'
              }
            }
          }
        }}
      >
        <DataGrid
          loading={isLoading}
          rows={rowsDataGrid}
          columns={columnsDataGrid}
          autoHeight
          hideFooter
          getRowId={(item) => item[rowId] || getRowIdData(item)}
          disableColumnMenu
          hideFooterPagination
          components={{
            Toolbar: CustomGridToolbar
          }}
          sx={{
            '.MuiDataGrid-columnSeparator': {
              display: 'none'
            }
          }}
          componentsProps={{
            toolbar: {
              toExport,
              title,
              value: searchText,
              onChange: (event) => requestSearch(event.target.value),
              clearSearch: () => requestSearch(''),
              onShow: () => handleShow
            }
          }}
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
          }
          localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        />
      </Box>
    </>
  );
};

export default StripedDataGrid;
