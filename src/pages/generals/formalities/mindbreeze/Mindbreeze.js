import React, { useEffect } from 'react';
import { Home, Search } from '@mui/icons-material';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import useMindbreeze from '@Hooks/generals/useMindbreeze';
import ProcedureSidebar from '../ProcedureSidebar';

const Mindbreeze = () => {
  const { 
    // mindbreezeList, 
    getMindbreezeList 
} = useMindbreeze();

  useEffect(()=> {
    getMindbreezeList()
  }, [])

  return (
    <Box className="d-flex flex-row h-100">
      <ProcedureSidebar />
      <div className="container-fluid p-0 me-3">
        <div className="my-3 container-fluid bg-white shadow-sm p-3 h-100">
          <nav aria-label="breadcrumb border-bottom">
            <ol className="breadcrumb d-flex align-items-center mb-0 fw-bold">
              <li className="breadcrumb-item">
                <Link to="/catalogos" className="green-color">
                  <Home color="success" />
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Consultar
              </li>
            </ol>
          </nav>
          <div className="container-fluid my-5">
            <h4 className="fw-bold green-color text-center mb-5">
              Consultar Mindbreeze
            </h4>
            <div className="d-flex justify-content-center ">
              <input type="text" className="input-main" />
              <button type="button" className="button-main">
                <Search sx={{ color: '#fff' }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Mindbreeze;
