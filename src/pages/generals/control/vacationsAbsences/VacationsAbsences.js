import React, { useEffect } from 'react';
import { DataGrid, esES } from '@mui/x-data-grid';
import useVacationsAbsences from '@Hooks/generals/useVacationsAbsences';
import Toolbar from './Toolbar';

const VacationsAbsences = () => {
  const { columns, vacationAbsences, getVacationAbsences } = useVacationsAbsences()
  
  
  useEffect(() => {
    getVacationAbsences()
  }, []);

  return (
    <div className="container-fluid bg-white p-0 my-3">
      <DataGrid
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
        }
        checkboxSelection
        disableSelectionOnClick
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        rows={vacationAbsences}
        columns={columns}
        hideFooter
        autoHeight
        components={{ Toolbar }}
        componentsProps={{
          toolbar: { title: 'Control de vacaciones y faltas' }
        }}
        className="bg-white shadow-sm px-5 py-3"
        sx={{
          '.MuiDataGrid-columnSeparator': {
            display: 'none'
          }
        }}
      />
    </div>
  );
};

export default VacationsAbsences;
