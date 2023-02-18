import { ADDRESS_ADD, ADDRESS_EDIT, ADDRESS_TITLE } from '@Const/const';
import { SIZES } from '@Const/styles';
import useAddressComponent from '@Hooks/component/useAddressComponent';
import AccountCircle from '@mui/icons-material/AccountCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import React from 'react';
import Button from '../button/Button';
import Flex from '../flex/Flex';
import Icon from '../icon/Icon';
import Modal from '../modal/Modal';
import TableDataGrid from '../table/TableDataGrid';
import AddressForm from './AddressForm';

const AddressComponent = ({ value, onChange, nameMain, isPrincipal = false }) => {
  const {
    isUpdate,
    Columns,
    openModal,
    openModalTable,
    isOpenTable,
    isOpen,
    closeModalTable,
    onSubmit,
    onClose,
    row,
  } = useAddressComponent({ onChange, value, nameMain });
  return (
    <>
      <Flex gap={SIZES.EIGHT}>
        <Button
          onClick={openModal}
          className="mb-4"
          isBorderPrimary
          icon={AccountCircle}
        >
          {ADDRESS_ADD}
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
        title={ADDRESS_TITLE}
        onClose={() => closeModalTable()}
        isNoPadding
      >
        <TableDataGrid data={value} columns={Columns} isRandomId />
      </Modal>
      <Modal
        title={isUpdate ? ADDRESS_EDIT : ADDRESS_ADD}
        isShow={isOpen}
        onClose={onClose}
      >
        <AddressForm
          row={row?.address}
          isUpdate={isUpdate}
          onSubmit={onSubmit}
          onCancel={onClose}
          isPrincipal={isPrincipal}
        />
      </Modal>
    </>
  );
};

export default AddressComponent;
