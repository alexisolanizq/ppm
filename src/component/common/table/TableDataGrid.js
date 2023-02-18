import useTableGrid from '@Hooks/component/useTableGrid';
import { DataGrid, esES } from '@mui/x-data-grid';
import React from 'react';
import TableDataGridToolbar from './TableDataGridToolbar';
import '@Assets/styles/tabledatagrid.css'

const TableDataGrid = ({
  isLoading = false,
  data = [],
  actions = [],
  columns,
  filter,
  sorting,
  rowId = 'id',
  isRandomId = false,
  ...props
}) => {
  const { rowsFilter, onSearch, generateRandom } = useTableGrid({ data });
  return (
    <div className='tabledatagrid'>
      <DataGrid
        loading={isLoading}
        rows={rowsFilter}
        columns={columns}
        getRowId={(item) => isRandomId ? generateRandom() : item[rowId]}
        pageSize={100}
        autoHeight
        hideFooter
        initialState={{ filter: {filterModel: filter}, sorting }}
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        components={{ 
          Toolbar: TableDataGridToolbar
         }}
         componentsProps={{
          toolbar: {
            actions,
            onSearch
          }
        }}
        {...props}
      />
    </div>
  );
};

export const commonProperties = {
  editable: false,
  sortable: true,
  flex: 1,
  headerAlign: 'center',
  align: 'center',
};

export const statusProperties = (field = 'status') => ({
  field,
  headerName: 'Estatus',
  type: 'boolean',
  hide: true
})

export default TableDataGrid;
