import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import { DataGrid, esES } from '@mui/x-data-grid';
import { AddOutlined, FilterAlt, Inbox, Send } from '@mui/icons-material';
import useNotice from '@Hooks/generals/useNotice';
import NoticeFormModal from './NoticeFormModal';

const Notice = () => {
  const {
    getInitialValues,
    noticeList,
    columns,
    modalNoticeShow,
    handleClose,
    control,
    handleSubmit,
    getNoticeModal,
    holderList,
    holderName
  } = useNotice();

  useEffect(() => {
    getInitialValues();
  }, []);

  return (
    <>
      <div className="container-fluid vh-100 cst-bg-primary p-0 m-0">
        <div className="container my-4 border shadow-sm rounded">
          <div className="row">
            <div className="col-md-3 d-flex align-items-center flex-column border-end">
              <Button
                color="success"
                variant="outlined"
                sx={{
                  width: '75%',
                  textTransform: 'capitalize',
                  fontWeight: 'bold',
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  m: 2,
                  borderRadius: '50px'
                }}
                onClick={() => getNoticeModal(true)}
              >
                <AddOutlined color="success" />
                <p>Crear aviso</p>
              </Button>
              <Button>
                <Inbox fontSize="small" />
                <p>Avisos Recibidos</p>
              </Button>
              <Button>
                <Send fontSize="small" />
                <p>Avisos Enviados</p>
              </Button>
            </div>
            <div className="col-md-9">
              <div className="d-flex flex-column">
                <div className="row align-items-center py-3 border-bottom">
                  <div className="col-md-4" />
                  <div className="col-md-4 text-center">
                    <h4 className="green-title m-0 fw-bold fs-8">Avisos</h4>
                  </div>
                  <div className="col-md-4 text-end">
                    <Button>
                      <FilterAlt sx={{ fontSize: '20px', color: '#9c9c9c' }} />
                    </Button>
                  </div>
                </div>
                <div>
                  <DataGrid
                    getRowId={(row) => row.notiId}
                    // loading={isLoading}
                    rows={noticeList}
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
                    localeText={
                      esES.components.MuiDataGrid.defaultProps.localeText
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NoticeFormModal
        modalNoticeShow={modalNoticeShow}
        handleClose={handleClose}
        control={control}
        handleSubmit={handleSubmit}
        holderList={holderList}
        holderName={holderName}
      />
    </>
  );
};

export default Notice;
