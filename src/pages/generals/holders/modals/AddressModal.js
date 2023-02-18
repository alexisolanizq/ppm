import React from 'react';
import { ADDRESS } from '@Const/generals';
import AddressForm from '@Pages/generals/holders/forms/AddressForm';
import Modal from '@Component/common/modal/Modal';
import useClientFormulario from '@Hooks/generals/useClientForm';

const AddressModal = ({
  handleAddress,
  addressModalShow,
  handleSubmit,
  handleAddressSubmit,
  control,
  onEnd = () => {}
}) => {
  const { countries } = useClientFormulario({ onEnd });
  return (
    <Modal
      title={ADDRESS}
      isShow={addressModalShow}
      onClose={handleAddress}
      maxWidth="md"
    >
      <AddressForm
        control={control}
        countries={countries}
        handleSubmit={handleSubmit}
        handleAddress={handleAddress}
        handleAddressSubmit={handleAddressSubmit}
      />
    </Modal>
  );
};

export default AddressModal;
