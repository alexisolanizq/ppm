import ImpiPaymentsColumns from '@Pages/generals/impiPayments/ImpiPaymentsColumns';
import { useListadoImpiPaymentsService } from '@Services/impiPayments/useImpiPaymentsService';
import React, { useState } from 'react';
import useModal from '@Hooks/common/useModal';
import IconAdd from '@Component/common/icon/IconAdd';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import Icon from '@Component/common/icon/Icon';

const useImpiPayments = () => {
  // state
  const [row, setRow] = useState(null);
  const modalForm = useModal()
  const modalEmail = useModal()
  const modalTotalAmount = useModal()
  const modalAsignment = useModal()
  const modalInvoicing = useModal()
  
  // api
  const {data, isLoading} = useListadoImpiPaymentsService()

  // functions
  const closeModal = () => {
    setRow(null);
    modalForm.closeModal()
  };

  const onSendEmail = () => modalEmail.openModal()

  // columns
  const columns = ImpiPaymentsColumns({ onSendEmail });

  const actions = [
    <Icon color='gray' icon={ShoppingCartIcon} onClick={modalTotalAmount.openModal} />,
    <Icon color='gray' icon={AssignmentIndIcon} onClick={modalAsignment.openModal} />,
    <Icon color='gray' icon={RequestQuoteIcon} onClick={modalInvoicing.openModal} />,
    <IconAdd onClick={modalForm.openModal}/>
  ]

  return {
    row,
    modalForm,
    columns,
    modalEmail,
    data,
    isLoading,
    closeModal,
    actions,
    modalTotalAmount,
    modalAsignment,
    modalInvoicing
  };
};

export default useImpiPayments
