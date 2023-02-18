import React, { useEffect } from 'react';
import useMachoteRelationship from '@Hooks/catalogs/useMachoteRelationshipPPM';
import MachoteRelationshipForm from '@Pages/catalogs/machoteRelationship/MachoteRelationshipForm';
import StripedDataGrid from '@Component/common/stripedDataGrid';
import CatalogsBreadcrumbs from '@Component/common/breadcrumb/CatalogsBreadcrumbs';
import { PAGE_TITLE_MACHOTE_RELATIONSHIP } from '@Const/catalogs';

const MachoteRelationship = () => {
  const {
    columns,
    modalShow,
    setModalShow,
    machoteRelationship,
    getMachoteRelationshipPPM,
    setMachoteRelationship,
    updateMachoteRelationship,
    machoteRelationships,
    setAction,
    handleMachoteRelationshipSubmit,
    machoteRelationshipListData,
    setMachoteRelationships,
    getRowIdData,

    procedureManagementAction,
    jobAreas,
    procedurePhases,
    documentsType,
    getOptionsForm,
    handleSubmit,
    control,
    handleClose,
    handleShow,
    alertMessage,
    setAlertMessage,
  } = useMachoteRelationship();

  useEffect(() => {
    getMachoteRelationshipPPM();
    getOptionsForm();
  }, []);

  return (
    <div className="container">
      <div className="my-3 container-fluid d-flex justify-content-start align-items-center p-2">
        <CatalogsBreadcrumbs
          links={[
            { name: PAGE_TITLE_MACHOTE_RELATIONSHIP }
          ]}
        />
      </div>
      <StripedDataGrid
        title={PAGE_TITLE_MACHOTE_RELATIONSHIP}
        columnsDataGrid={columns}
        getRowIdData={getRowIdData}
        rowsDataGrid={machoteRelationships}
        setRowsDataGrid={setMachoteRelationships}
        allData={machoteRelationshipListData}
        handleShow={handleShow}
        alertMessage={alertMessage}
        setAlertMessage={setAlertMessage}
      />

      <MachoteRelationshipForm
        machoteRelationship={machoteRelationship}
        setMachoteRelationship={setMachoteRelationship}
        updateMachoteRelationship={updateMachoteRelationship}
        modalShow={modalShow}
        setModalShow={setModalShow}
        setAction={setAction}
        handleMachoteRelationshipSubmit={handleMachoteRelationshipSubmit}

        procedureManagementAction={procedureManagementAction}
        jobAreas={jobAreas}
        procedurePhases={procedurePhases}
        documentsType={documentsType}
        control={control}
        handleSubmit={handleSubmit}
        handleClose={handleClose}
      />
    </div>
  );
};

export default MachoteRelationship;
