import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Form } from 'react-bootstrap';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

import useAuthorityNotifications from '@Hooks/catalogs/useAuthorityNotifications';

import Spinner from '@Component/common/loader/Spinner';
import AlertMessage from '@Component/common/stripedDataGrid/AlertMessage';
import BlockItem from './BlockItem';

const AuthorityNotifications = () => {
  const {
    isLoading,
    initialState,
    //! List
    jobAreas,
    handdleAreaCombo,
    jobAreaSelected,
    sortedPhases,
    impiDocuments,
    notificationPeriod,
    notificationFequency,
    users,
    handleChange,
    //! Alert
    alertMessage,
    setAlertMessage,
    //! Create
    onSubmit,
    //! useForm
    register,
    handleSubmit,
    errors
  } = useAuthorityNotifications();

  useEffect(() => {
    initialState();
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      <div className="container-fluid vh-100 cst-bg-primary p-0 m-0">
        <div className="container pt-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/catalogos">Catálogos</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Notificaciones Autoridad
              </li>
            </ol>
          </nav>
          <div className="container-fluid cst-bg-white p-0 m-0">
            <div className="container">
              <div className="text-center pt-1 px-3">
                <h4 className="green-title m-0 fw-bold fs-8">
                  Notificaciones Autoridad
                </h4>
              </div>

              <div className="text-center">
                <FormControl className="w-25 mb-2">
                  <InputLabel id="area-label" color="success">
                    * Área
                  </InputLabel>
                  <Select
                    input={<OutlinedInput label="* Área" />}
                    labelId="area-label"
                    color="success"
                    name="area"
                    defaultValue=""
                    onChange={handdleAreaCombo}
                  >
                    <MenuItem value="" disabled>
                      Elige una opción
                    </MenuItem>
                    {jobAreas.map((item) => (
                      <MenuItem key={item.joaId} value={item.joaId}>
                        {item.joaName}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>

              <AlertMessage
                alertMessage={alertMessage}
                setAlertMessage={setAlertMessage}
              />

              <div className="contenedor">
                <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                  {sortedPhases.map((sortedPhase) => (
                    <BlockItem
                      key={sortedPhase.sophId}
                      sortedPhase={sortedPhase}
                      areaID={jobAreaSelected}
                      impiDocuments={impiDocuments}
                      notificationPeriod={notificationPeriod}
                      notificationFequency={notificationFequency}
                      users={users}
                      handleChange={handleChange}
                      register={register}
                      errors={errors}
                    />
                  ))}

                  {jobAreaSelected !== 0 && (
                    <div className="d-flex justify-content-around">
                      <button
                        type="button"
                        className="close btn-close-modal-app rounded"
                      >
                        Cancelar
                      </button>
                      <button
                        type="submit"
                        className="btn-primary-modal rounded"
                      >
                        Guardar
                      </button>
                    </div>
                  )}
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthorityNotifications;
