import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import useDefaultNotes from '@Hooks/catalogs/useDefaultNotes';

import CustomToolbar from '@Component/common/customToolBar';
import List from './List';
import DefaultNoteModal from './DefaultNoteModal';

const DefaultNotes = () => {
  const {
    initialState,
    defaultNotesRowsDataList,
    //! List
    rowsDataList,
    setRowsDataList,
    //! Modal
    show,
    handleShow,
    handleClose,
    //! Alert
    alertMessage,
    setAlertMessage,
    //! Create
    priorities,
    onSubmit,
    //! Update
    isUpdate,
    setDefaultNote,
    currentDefaultNote,
    onUpdate,
    //! useForm
    register,
    handleSubmit,
    errors
  } = useDefaultNotes();

  useEffect(() => {
    initialState();
  }, []);

  return (
    <>
      <div className="container-fluid vh-100 cst-bg-primary p-0 m-0">
        <div className="container pt-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/catalogos">Catálogos</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Notas predeterminadas
              </li>
            </ol>
          </nav>
          <div className="container-fluid cst-bg-white p-0 m-0">
            <div className="container">
              <CustomToolbar
                title="Notas predeterminadas"
                onShow={handleShow}
                allData={defaultNotesRowsDataList}
                setRowsDataList={setRowsDataList}
                alertMessage={alertMessage}
                setAlertMessage={setAlertMessage}
              />

              <List
                defaultNotes={rowsDataList}
                setDefaultNote={setDefaultNote}
              />
            </div>
          </div>
        </div>
      </div>
      <DefaultNoteModal
        isUpdate={isUpdate}
        show={show}
        handleClose={handleClose}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        priorities={priorities}
        onSubmit={onSubmit}
        currentDefaultNote={currentDefaultNote}
        onUpdate={onUpdate}
      />
    </>
  );
};

export default DefaultNotes;
