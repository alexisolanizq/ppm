import { Button } from '@mui/material';
import React from 'react';

const Attached = () => (
  <div>
    <div className="container-fluid bg-white card p-0 my-3">
      <div className="card-header d-flex bg-white green-color fw-bold">
        <Button className="me-3" variant="outlined" size="small" color='success'>Reclamo</Button>
        <Button className="me-3" variant="outlined" size="small" color='secondary'>Descripción</Button>
        <Button variant="outlined" size="small" color='secondary'>Dibujos</Button>
      </div>
      <div className="card-body vh-100">
        ...
      </div>
    </div>
  </div>
);

export default Attached;
