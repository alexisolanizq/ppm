import React, { useEffect } from 'react';
import usePermissionLevel from '@Hooks/catalogs/usePermissionLevels';
import PermissionForm from '@Pages/catalogs/permissons/PermissionForm';
import StripedDataGrid from '@Component/common/stripedDataGrid';
import CatalogsBreadcrumbs from '@Component/common/breadcrumb/CatalogsBreadcrumbs';
import { CREATE_PERMISSION_LEVELS, PAGE_TITLE_PERMISSION_LEVELS, UPDATE_PERMISSION_LEVELS } from '@Const/catalogs';

const PermissionLevels = () => {
  const {
    action,
    control,
    columns,
    modalShow,
    setAction,
    isLoading,
    handleShow,
    handleClose,
    getRowIdData,
    setModalShow,
    handleSubmit,
    alertMessage,
    setAlertMessage,
    permissionLevel,
    permissionLevels,
    setPermissionLevel,
    getPermissionLevels,
    setPermissionLevels,
    updatePermissionLevel,
    permissionLevelListData,
    handlePermissionLevelSubmit
  } = usePermissionLevel();

  useEffect(() => {
    getPermissionLevels();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="my-3 container-fluid d-flex justify-content-start align-items-center p-2">
          <CatalogsBreadcrumbs
            links={[
              { name: PAGE_TITLE_PERMISSION_LEVELS }
            ]}
          />
        </div>
          <StripedDataGrid
            title={PAGE_TITLE_PERMISSION_LEVELS}
            isLoading={isLoading}
            columnsDataGrid={columns}
            getRowIdData={getRowIdData}
            rowsDataGrid={permissionLevels}
            setRowsDataGrid={setPermissionLevels}
            allData={permissionLevelListData}
            handleShow={handleShow}
            alertMessage={alertMessage}
            setAlertMessage={setAlertMessage}
          />
      </div>
      <PermissionForm
        action={action}
        CREATE={CREATE_PERMISSION_LEVELS}
        UPDATE={UPDATE_PERMISSION_LEVELS}
        control={control}
        setAction={setAction}
        modalShow={modalShow}
        handleClose={handleClose}
        setModalShow={setModalShow}
        handleSubmit={handleSubmit}
        permissionLevel={permissionLevel}
        permissionLevels={permissionLevels}
        setPermissionLevel={setPermissionLevel}
        updatePermissionLevel={updatePermissionLevel}
        handlePermissionLevelSubmit={handlePermissionLevelSubmit}
      />
    </div>
  );
};

export default PermissionLevels;
