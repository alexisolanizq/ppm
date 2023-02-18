import { InvoicingColumns, InvoicingHeaders } from '@Component/common/invoicingEntities/InvoicingEntitiesColumns';
import useModal from '@Hooks/common/useModal';
import { useState } from 'react';

const useInvoicingEntitesComponent = ({ value = [], onChange, nameMain = '' }) => {
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
        if (i === rowIndex) return {billingEntity: data, [nameMain]: isDefault};
        if (isDefault) {
          return {
            ...item,
            [nameMain]: false,
          }
        } 

        return item;
      })
      onChange(map);
    } else {
      newValue.push({
        billingEntity: data,
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
    setRow({ billingEntity: { ...newRow.billingEntity, [nameMain]: newRow.isDefault } });
    setRowIndex(index);
    openModal();
  };

  const Headers = InvoicingHeaders
  const Columns = InvoicingColumns({ onEdit, onRemove, nameMain })

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

export default useInvoicingEntitesComponent;
