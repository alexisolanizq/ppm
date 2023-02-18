import React, { useEffect } from 'react';
import { Link, useMatch } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

import useMachoteDesign from '@Hooks/catalogs/useMachoteDesign';

const index = () => {
  const createPath = useMatch('/catalogos/machotes/:ppmDocumentId');

  const {
    initialState,
    //! List
    ppmDocument
  } = useMachoteDesign();

  useEffect(() => {
    if (createPath) {
      const { ppmDocumentId } = createPath.params;

      initialState(ppmDocumentId);
    }
  }, []);

  if (!ppmDocument) return null;

  return (
    <div className="container-fluid cst-bg-primary vh-100 p-0 m-0">
      <div className="mx-4 cst-bg-white">
        <div>
          <p className="p-3">
            Documento: <strong>{ppmDocument.ppmdName}</strong>{' '}
          </p>
        </div>
        <div className="pt-1 px-3 d-flex justify-content-between align-items-center">
          <h4>Diseño de Machotes</h4>
          <div className="table__actions">
            <button type="button" className="btn__action">
              <SearchIcon />
            </button>
            <button type="button" className="btn__action">
              <FilterAltOutlinedIcon />
            </button>
            <Link
              to="/catalogos/machotes/crear"
              className="btn__action green-icon"
            >
              <AddCircleOutlineIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
