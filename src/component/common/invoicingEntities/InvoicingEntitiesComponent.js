import useInvoicingEntitesComponent from '@Hooks/component/useInvoicingEntitesComponent';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InvoicingEntityForm from '@Component/common/invoicingEntities/InvoicingEntityForm';
import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '../button/Button';
import Flex from '../flex/Flex';
import Icon from '../icon/Icon';
import Modal from '../modal/Modal';
import TableGeneral from '../table/TableGenerals';

const InvoicingEntitiesComponent = ({ value, onChange, nameMain, addresses }) => {
  const {
    isOpen,
    openModal,
    onSubmit,
    row,
    isUpdate,
    onClose,
    isOpenTable,
    openModalTable,
    closeModalTable,
    Columns,
    Headers
  } = useInvoicingEntitesComponent({ value, onChange, nameMain });

  return (
    <>
      <Flex gap={8}>
        <Button
          onClick={openModal}
          className="mb-4"
          isBorderPrimary
          icon={AccountCircle}
        >
          Agregar entidad de facturación
        </Button>
        {value && value.length > 0 && (
          <Icon
            className="mb-3"
            icon={VisibilityIcon}
            onClick={() => openModalTable()}
          />
        )}
      </Flex>
      <Modal
        isShow={isOpenTable}
        title="Entidad de facturación"
        onClose={() => closeModalTable()}
      >
        <TableGeneral list={value} headers={Headers} columns={Columns} />
      </Modal>
      <Modal
        title={isUpdate ? 'Editar entidad' : 'Agregar entidad'}
        isShow={isOpen}
        onClose={onClose}
      >
        <InvoicingEntityForm
          row={row?.billingEntity}
          isUpdate={isUpdate}
          onSubmit={onSubmit}
          onCancel={onClose}
          addresses={addresses}
        />
      </Modal>
    </>
  );
};

export default InvoicingEntitiesComponent;
