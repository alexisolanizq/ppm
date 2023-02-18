import React from 'react';
import DivWidth from '@Component/common/div/DivWidth';
import TableDataGrid from '@Component/common/table/TableDataGrid';
import useInventors from '@Hooks/generals/useInventors';
import Modal from '@Component/common/modal/Modal';
import { isValid } from '@Utils/values';
import { ADD_INVENTORS, UPDATE_INVENTORS } from '@Const/generals';
import InventorForm from '@Pages/generals/formalities/inventors/InventorForm';

const Inventors = () => {
  const {
    row,
    isOpen,
    actions,
    columns,
    onCancel,
    isLoading,
    inventorsList,
    procedureParam
  } = useInventors();
  return (
    <>
      <DivWidth porcentage={100}>
        <TableDataGrid
          rowId="inveId"
          columns={columns}
          actions={actions}
          data={inventorsList}
          isLoading={isLoading}
        />
      </DivWidth>
      <Modal
        isShow={isOpen}
        onClose={onCancel}
        title={isValid(row) ? UPDATE_INVENTORS : ADD_INVENTORS}
      >
        <InventorForm
          procedureParam={procedureParam}
          onEnd={onCancel}
          isUpdate={isValid(row)}
          row={row}
          onCancel={onCancel}
        />
      </Modal>
    </>
  );
};

export default Inventors;
