import EmailModal from '@Component/common/emailModal';
import React from 'react';
import Modal from '@Component/common/modal/Modal';
import GeneralLayout from '@Component/layout/GeneralLayout';
import TableDataGrid from '@Component/common/table/TableDataGrid';
import { MODAL_TITLE_ASIGNMENT, MODAL_TITLE_INVOICING_ADD, MODAL_TITLE_TOTAL_AMOUNT, PAGE_TITLE_ADD_IMPI, PAGE_TITLE_IMPI } from '@Const/generals';
import useImpiPayments from '@Hooks/generals/useImpiPayments';
import ImpiPaymentsForm from './ImpiPaymentsForm';
import ImpiPaymentsTotalAmount from './ImpiPaymentsTotalAmount';
import ImpiPaymentsAsignment from './ImpiPaymentsAsignment';
import ImpiPaymentsInvoicing from './ImpiPaymentsInvoicing';

const ImpiPayments = () => {
  const {
    columns,
    row,
    modalEmail,
    closeModal,
    data,
    isLoading,
    modalForm,
    actions,
    modalTotalAmount,
    modalAsignment,
    modalInvoicing
  } = useImpiPayments();

  return (
    <>
      <GeneralLayout title={PAGE_TITLE_IMPI}>
        <TableDataGrid 
          columns={columns}
          data={data}
          isLoading={isLoading}
          rowId="impaId"
          actions={actions}
        />
      </GeneralLayout>
      <Modal isShow={modalForm.isOpen} onClose={closeModal} title={PAGE_TITLE_ADD_IMPI}>
        <ImpiPaymentsForm onEnd={closeModal} onCancel={closeModal} row={row} />
      </Modal>
      <Modal isNoPadding isShow={modalTotalAmount.isOpen} onClose={modalTotalAmount.closeModal} title={MODAL_TITLE_TOTAL_AMOUNT}>
        <ImpiPaymentsTotalAmount />
      </Modal>
      <Modal isShow={modalAsignment.isOpen} onClose={modalAsignment.closeModal} title={MODAL_TITLE_ASIGNMENT}>
        <ImpiPaymentsAsignment onCancel={modalAsignment.closeModal}/>
      </Modal>
      <Modal isNoPadding classNameBody='px-5' isShow={modalInvoicing.isOpen} onClose={modalInvoicing.closeModal} title={MODAL_TITLE_INVOICING_ADD}>
        <ImpiPaymentsInvoicing />
      </Modal>
      <EmailModal isShow={modalEmail.isOpen} onClose={modalEmail.closeModal}/>
    </>
  );
};

export default ImpiPayments;
