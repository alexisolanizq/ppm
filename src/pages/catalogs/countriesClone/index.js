import React from 'react';
import Modal from '../../../component/common/modal/Modal';
import StripedDataGridV2 from '../../../component/common/stripedDataGrid/StripedDataGridV2';
import List from '../../../component/layout/List';
import FormularioAreasEstructura from './components/FormularioCountriesEstructura';
import useListadoAreasEstructura from './hooks/useListadoCountriesEstructura';

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
  } = useListadoAreasEstructura();

  return (
    <>
      <List title="Lista de paises" prevLinks={prevLinks}>
        <StripedDataGridV2
          title="Lista de paises"
          columnsDataGrid={columns}
          allData={data}
          isLoading={isLoading}
          rowId="counId"
          handleShow={openModal}
        />
      </List>
      <Modal isShow={modalShow} onClose={closeModal} title="Alta de área">
        <FormularioAreasEstructura onClose={closeModal} row={row}/>
      </Modal>
    </>
  );
};

export default index;
