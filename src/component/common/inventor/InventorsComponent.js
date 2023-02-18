import React from 'react';
import Flex from '@Component/common/flex/Flex';
import Button from '@Component/common/button/Button';
import { Divider } from '@mui/material';
import Modal from '@Component/common/modal/Modal';
import IconText from '@Component/common/icon/IconText';
import { FileDownload, Visibility } from '@mui/icons-material';
import useInventorComponent from '@Hooks/component/useInventorComponent';
import TableDataGrid from '../table/TableDataGrid';

const InventorsComponent = ({
  withSuccess = [],
  withErrors = [],
  setEntriesWithSuccess,
  setEntriesWithErrors,
  onClick
}) => {
  const {
    exportData,
    isOpen,
    openModal,
    onClose,
    Columns,
    isOpenErrorFields,
    closeErrorFieldsModal,
    openErrorFieldsModal
  } = useInventorComponent({
    withSuccess,
    withErrors,
    setEntriesWithSuccess,
    setEntriesWithErrors
  });
  return (
    <>
      <Button onClick={onClick}>Preprocesar</Button>
      <Divider className="my-4" />
      <Flex justify="between">
        {withErrors.length > 0 && (
          <IconText
            icon={Visibility}
            text="Datos incorrectos"
            onClick={openErrorFieldsModal}
          />
        )}
        {withSuccess.length > 0 && (
          <IconText
            icon={Visibility}
            text="Datos listos para registrar"
            onClick={openModal}
          />
        )}
      </Flex>
      <Modal
        isShow={isOpen}
        title="Datos listos para registrar"
        onClose={() => onClose()}
      >
        <TableDataGrid rowId="clientId" columns={Columns} data={withSuccess} />
      </Modal>
      <Modal
        isShow={isOpenErrorFields}
        title="Datos erroneos"
        onClose={() => closeErrorFieldsModal()}
      >
        <TableDataGrid rowId="clientId" columns={Columns} data={withErrors} />
        {withErrors && (
          <Flex justify="end">
            <Button className="my-3" icon={FileDownload} onClick={exportData}>
              Descargar elementos
            </Button>
          </Flex>
        )}
      </Modal>
    </>
  );
};

export default InventorsComponent;
