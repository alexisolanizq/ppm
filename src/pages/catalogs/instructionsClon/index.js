import React from 'react';
import Modal from '../../../component/common/modal/Modal';
import StripedDataGridV2 from '../../../component/common/stripedDataGrid/StripedDataGridV2';
import List from '../../../component/layout/List';
import FormularioInstructionsEstructura from './components/FormularioInstructionsEstructura';
import useListadoInstructionsEstructura from './hooks/useListadoInstructionsEstructura';

const index = () => {
  const {
    data,
    isLoading,
    columns,
    prevLinks,
    modalShow,
    closeModal,
    openModal,
    row
  } = useListadoInstructionsEstructura();

  return (
    <>
      <List title="Lista de instrucciones" prevLinks={prevLinks}>
        <StripedDataGridV2
          title="Lista de instrucciones"
          columnsDataGrid={columns}
          allData={data}
          isLoading={isLoading}
          rowId="intyId"
          handleShow={openModal}
        />
      </List>
      <Modal isShow={modalShow} onClose={closeModal} title="Alta de instrucciones">
        <FormularioInstructionsEstructura onClose={closeModal} row={row}/>
      </Modal>
    </>
  );
};

export default index;
