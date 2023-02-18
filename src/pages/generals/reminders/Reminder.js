import React, { useEffect } from 'react';
import { DataGrid, esES } from '@mui/x-data-grid';
import useReminder from '@Hooks/generals/useReminder';

const Reminder = () => {
  const { getReminders, reminders, columns } = useReminder();
  useEffect(() => {
    getReminders();
  }, []);
  return (
    <div className="container-fluid vh-100 cst-bg-primary p-0 m-0">
      <div className="container my-4 border shadow-sm rounded">
        <div>
          <DataGrid
            // loading={isLoading}
            getRowId={(row) => row.remId}
            rows={reminders}
            columns={columns}
            autoHeight
            hideFooter
            disableColumnMenu
            hideFooterPagination
            sx={{
              margin: 0,
              padding: 0,
              border: 0,
              '.MuiDataGrid-columnSeparator': {
                display: 'none'
              }
            }}
            localeText={esES.components.MuiDataGrid.defaultProps.localeText}
          />
        </div>
      </div>
    </div>
  );
};

export default Reminder;
