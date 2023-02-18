/* eslint-disable no-return-assign */
/* eslint-disable no-unused-expressions */
import useModal from '@Hooks/common/useModal';
import { InventorComponentColumns } from '@Component/common/inventor/InventorComponentColumns';

const useInventorComponent = ({
  withErrors,
  withSuccess,
  setEntriesWithSuccess,
  setEntriesWithErrors
}) => {
  const { isOpen, closeModal, openModal } = useModal();
  const {
    isOpen: isOpenErrorFields,
    closeModal: closeErrorFieldsModal,
    openModal: openErrorFieldsModal
  } = useModal();

  const exportData = () => {
    let textData = '';

    withErrors.map((item) => {
      let { inveName, inveAddress, nationalityName } = item;

      inveName || (inveName = 'Campo vacio');
      inveAddress || (inveAddress = 'Campo vacio');
      nationalityName || (nationalityName = 'Capo vacio');

      textData += `${inveName}, ${inveAddress}, ${nationalityName}; \n`;

      return textData;
    });
    const textFile = new Blob([textData], {type: 'text/plain'})
    const downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(textFile);
    downloadLink.download = `${new Date().toLocaleString()}-lista-de-errores.txt`;
    downloadLink.click();

  };

  const onClose = () => {
    closeModal();
  };

  const onRemove = (row) => {
    let item = withSuccess.findIndex((e) => row.clientId === e.clientId);
    if (item === -1) {
      item = withErrors.findIndex((e) => row.clientId === e.clientId);
      const errors = [...withErrors];
      errors.splice(item, 1);
      setEntriesWithErrors(errors);
      // eslint-disable-next-line no-unused-expressions
      errors.length <= 0 && closeErrorFieldsModal();
      return;
    }
    const success = [...withSuccess];
    success.splice(item, 1);
    setEntriesWithSuccess(success);
    // eslint-disable-next-line no-unused-expressions
    success.length <= 0 && closeModal();
  };

  const Columns = InventorComponentColumns({ onRemove });

  return {
    isOpen,
    closeModal,
    openModal,
    onClose,

    Columns,

    isOpenErrorFields,
    closeErrorFieldsModal,
    openErrorFieldsModal,

    exportData
  };
};

export default useInventorComponent;
