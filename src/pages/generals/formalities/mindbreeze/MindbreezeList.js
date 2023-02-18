import {
  AddCircleOutline,
  Article,
  Folder,
  PictureAsPdf,
  Visibility
} from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';
import useMindbreeze from '@Hooks/generals/useMindbreeze';
import SearchPPM from '@Component/common/search/SearchPPM';
import MindbreezeForm from './MindbreezeForm';

const MindbreezeList = () => {
  const {
    files,
    control,
    clients,
    imgPath,
    handleClose,
    handleSubmit,
    onDropAccepted,
    onDropRejected,
    mindbreezeModalShow,
    StyledTableRow,
    StyledTableCell
  } = useMindbreeze();
  return (
    <div className="container-fluid h-100 bg-white shadow-sm">
      <div className="container border-bottom d-flex justify-content-around p-4">
        <img
          src={imgPath}
          alt="Panamericanas de patentes y marcas"
          height={65}
        />
        <SearchPPM />
      </div>
      <div className="mindbreeze-list container d-flex flex-column justify-content-center align-items-center gap-3">
        <div className="border-bottom w-50 mt-3 p-3">
          <div className="row d-flex align-items-center">
            <div className="col d-flex justify-content-center align-items-center">
              <PictureAsPdf sx={{ fontSize: 50, color: '#4d4f50' }} />
            </div>
            <div className="col-md-10">
              <div className="d-flex justify-content-around">
                <p className="text-secondary fw-bold">P190001MX</p>
                <p className="text-secondary fw-bold">
                  Evirtual 18 Nov 2020.pdf
                </p>
              </div>
              <div className="d-flex justify-content-around mt-2">
                <Button
                  className="text-muted fw-bold"
                  size="small"
                  sx={{ textTransform: 'capitalize' }}
                >
                  <Folder size="small" className="me-1" />
                  <p>Abrir</p>
                </Button>
                <Button
                  className="text-muted fw-bold"
                  size="small"
                  sx={{ textTransform: 'capitalize' }}
                >
                  <Visibility size="small" className="me-1" />
                  <p>Preview</p>
                </Button>
                <Button
                  className="text-muted fw-bold"
                  size="small"
                  sx={{ textTransform: 'capitalize' }}
                >
                  <AddCircleOutline size="small" className="me-1" />
                  <p>Acumular</p>
                </Button>
              </div>
            </div>
            <div className="d-flex ms-3 mt-3 gap-4">
              <p className="text-secondary fw-bold">Referencias:</p>
              <p className="text-secondary fw-bold">P190001MX</p>
              <p className="text-secondary fw-bold">P190003MX</p>
            </div>
          </div>
        </div>

        <div className="border-bottom w-50 mt-3 p-3">
          <div className="row d-flex align-items-center">
            <div className="col d-flex justify-content-center align-items-center">
              <Article sx={{ fontSize: 50, color: '#4d4f50' }} />
            </div>
            <div className="col-md-10">
              <div className="d-flex justify-content-around">
                <p className="text-secondary fw-bold">P190001MX</p>
                <p className="text-secondary fw-bold">
                  Evirtual 18 Nov 2020.pdf
                </p>
              </div>
              <div className="d-flex justify-content-around mt-2">
                <Button
                  className="text-muted fw-bold"
                  size="small"
                  sx={{ textTransform: 'capitalize' }}
                >
                  <Folder size="small" className="me-1" />
                  <p>Abrir</p>
                </Button>
                <Button
                  className="text-muted fw-bold"
                  size="small"
                  sx={{ textTransform: 'capitalize' }}
                >
                  <Visibility size="small" className="me-1" />
                  <p>Preview</p>
                </Button>
                <Button
                  className="text-muted fw-bold"
                  size="small"
                  sx={{ textTransform: 'capitalize' }}
                >
                  <AddCircleOutline size="small" className="me-1" />
                  <p>Acumular</p>
                </Button>
              </div>
            </div>
            <div className="d-flex ms-3 mt-3 gap-4">
              <p className="text-secondary fw-bold">Referencias:</p>
              <p className="text-secondary fw-bold">P190001MX</p>
              <p className="text-secondary fw-bold">P190003MX</p>
            </div>
          </div>
        </div>
      </div>

      <MindbreezeForm
        files={files}
        clients={clients}
        control={control}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        onDropAccepted={onDropAccepted}
        onDropRejected={onDropRejected}
        mindbreezeModalShow={mindbreezeModalShow}
        StyledTableRow={StyledTableRow}
        StyledTableCell={StyledTableCell}
      />
    </div>
  );
};

export default MindbreezeList;
