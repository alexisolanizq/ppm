import { AddressColumns } from '@Component/common/address/AddressColumns';
import useModal from '@Hooks/common/useModal';
import { useState } from 'react';

const useAddressComponent = ({ value = [], onChange, nameMain = ''}) => {
  const [row, setRow] = useState(null);
  const [rowIndex, setRowIndex] = useState(-1);
  const { isOpen: isOpenTable, closeModal: closeModalTable, openModal: openModalTable } = useModal()
  const { isOpen, closeModal, openModal } = useModal();

  const onClose = () => {
    setRow(null);
    setRowIndex(-1);
    closeModal();
  };

  const onSubmit = ({isDefault, ...data}) => {
    const newValue = [...value];
    if (rowIndex > -1) {
      const map = newValue.map((item, i) => {
        if (i === rowIndex) return {address: data, [nameMain]: isDefault};
        if (isDefault) {
          return {
            ...item,
            [nameMain]: false,
          }
        }
        return item
      })
      onChange(map);
    } else {
      newValue.push({
        address: data,
        [nameMain]: isDefault
      });
      if (isDefault) {
        onChange(newValue.map((item, index) => {
          if (index === (newValue.length - 1)) return item
          return {
            ...item,
            [nameMain]: false,
          }
        }));
      } else {
        onChange(newValue);
      }
    }

    onClose();
  };

  const onRemove = (index) => {
    const newValue = [...value];
    onChange(newValue.filter((_v, i) => i !== index));
  };

  const onEdit = (index) => {
    const newValue = [...value];
    const newRow = newValue.find((_v, i) => i === index)
    setRow({ address: { ...newRow.address, [nameMain]: newRow.isDefault } });
    setRowIndex(index);
    openModal();
  };

  const Columns = AddressColumns({ onEdit, onRemove, nameMain })

  const isUpdate = rowIndex > -1;

  return {
    isOpenTable,
    closeModalTable,
    openModalTable,
    isOpen,
    openModal,
    onSubmit,
    isUpdate,
    Headers,
    Columns,
    row,
    onClose
  }
}

export default useAddressComponent