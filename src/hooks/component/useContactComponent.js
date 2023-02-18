import { useState } from 'react';
import {
  ContactColumns,
  ContactHeaders
} from '@Component/common/contacts/ContactsColumns';
import useModal from '@Hooks/common/useModal';

const useContactComponent = ({ value = [], onChange, nameMain = '' }) => {
  const [row, setRow] = useState(null);
  const [rowIndex, setRowIndex] = useState(-1);
  const {
    isOpen: isOpenTable,
    closeModal: closeModalTable,
    openModal: openModalTable
  } = useModal();
  const { isOpen, closeModal, openModal } = useModal();

  const onClose = () => {
    setRow(null);
    setRowIndex(-1);
    closeModal();
  };

  const onSubmit = ({ isDefault, ...data }) => {
    const newValue = [...value];
    if (rowIndex > -1) {
      const map = newValue.map((item, index) => {
        if (index === rowIndex)
          return {
            contact: data,
            [nameMain]: isDefault
          };
        if (isDefault) {
          return {
            ...item,
            [nameMain]: false
          };
        }

        return item;
      });
      onChange(map);
    } else {
      newValue.push({
        contact: data,
        [nameMain]: isDefault
      });
      if (isDefault) {
        onChange(
          newValue.map((item, index) => {
            if (index === rowIndex) return item;
            return {
              ...item,
              [nameMain]: false
            };
          })
        );
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
    const newRow = newValue.find((_v, i) => i === index);
    setRow({
      contact: { ...newRow.contact, isDefault: newRow[nameMain] }
    });
    setRowIndex(index);
    openModal();
  };

  const Headers = ContactHeaders;
  const Columns = ContactColumns({ onEdit, onRemove });

  const isUpdate = rowIndex > -1;

  return {
    isOpen,
    closeModal,
    openModal,
    onSubmit,
    onRemove,
    onEdit,
    row,
    isUpdate,
    onClose,

    isOpenTable,
    closeModalTable,
    openModalTable,

    Headers,
    Columns
  };
};

export default useContactComponent;
