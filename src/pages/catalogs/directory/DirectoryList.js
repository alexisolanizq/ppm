import {
    faEye,
    faFilter,
    faPlusCircle,
    faSearch,
  } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import React, { useEffect } from 'react';
  import { Link } from 'react-router-dom';
  import useEmployees from '@Hooks/catalogs/useEmployees';
  
  const DirectoryList = () => {
    const { employees, getEmployeeList } = useEmployees();
  
    useEffect(() => {
      getEmployeeList()
    }, []);
  
    return (
      <div className="bg-white container-fluid vh-100">
        <div className="container d-flex justify-content-between align-items-center px-3 py-4">
            <div>
                <p className='m-0 text-muted'>Cliente: <span className='green-text'>Coopel</span> </p>
            </div>
          <div className="fs-5 fw-bold text-uppercase green-title">
            Directorio
          </div>
          <div>
            <FontAwesomeIcon className="me-3 text-muted" icon={faSearch} />
            <FontAwesomeIcon className="me-3 text-muted" icon={faFilter} />
            <Link to="/catalogos/empleados/registro">
              <FontAwesomeIcon
                className="me-3 text-muted green-color"
                icon={faPlusCircle}
              />
            </Link>
          </div>
        </div>
        <div className="container d-flex flex-column flex-sm-row flex-wrap justify-content-between align-items-center px-3">
          {(employees || []).length === 0
            ? 'No hay empleados'
            : employees.map(({ id, name, phone, email }) => (
                <div
                  className="card shadow border-0 mb-4"
                  key={id}
                  style={{ width: 300 }}
                >
                  <div className="p-1">
                    <div className="border-bottom d-flex justify-content-between align-items-center py-3 px-3">
                      <img
                        src="https://via.placeholder.com/30"
                        alt="profile"
                        className="rounded-circle"
                      />
                      <p className="p-0 m-0 text-muted fw-bold">{name}</p>
                    </div>
                    <div className="pb-2">
                      <div className="mt-2 pt-1 px-3">
                        <p className="m-0 p-0 text-muted">Teléfono</p>
                        <p className="m-0 p-0">{phone}</p>
                      </div>
                      <div className="pt-1 px-3">
                        <p className="m-0 p-0 text-muted">Correo</p>
                        <p className="m-0 p-0">{email}</p>
                      </div>
                    </div>
                    <div className="border-top">
                      <div className="d-flex justify-content-end align-items-center py-3 px-3 fw-bold">
                        <Link
                          to={`${id}`}
                          className="text-decoration-none green-title"
                        >
                          <FontAwesomeIcon className="me-3" icon={faEye} /> Ver
                          más ...
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    );
  };
  
  export default DirectoryList;
  