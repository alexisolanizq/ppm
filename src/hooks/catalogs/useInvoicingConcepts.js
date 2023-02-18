import React, { useState } from 'react';

import IconAdd from '@Component/common/icon/IconAdd';

import { LINK_CATALOGS } from '@Const/links';
import { TITLE_CATALOGS } from '@Const/catalogs';

import InvoicingConceptsColumns from '@Pages/catalogs/invoicingConcepts/InvoicingConceptsColumns';

// import { useInvoicingConceptService } from '@Services/invoicingConcepts/useInvoicingConceptsService';

import useModal from '@Hooks/common/useModal';

const useInvoicingConcepts = () => {
  const [row, setRow] = useState(null);
  const { isOpen, openModal, closeModal } = useModal();

  // api
  // const { data: invoicingConcepts, isLoading } = useInvoicingConceptService();
  const invoicingConcepts = [
    {
      id: 1,
      jobArea: { id: 1, name: 'Patentes' },
      nameSpanish: 'Solicitud de Marca',
      nameEnglish: 'Filing Trademark',
      description: 'Solicitud de marca',
      paymentRight: { id: 1, name: '1a. Presentación de solicitud patente' },
      multiple: true,
      article: { name: 'Hojas' },
      feePeso: '3879.31',
      feeDollar: '510',
      uniqKey: { name: 'E48' },
      agent: null,
      holder: null,
      concept: { name: 'Factura cliente' },
      prepayment: true,
      status: true
    },
    {
      id: 2,
      jobArea: { id: 2, name: 'Marcas' },
      nameSpanish: 'Busqueda Comercial por hora',
      nameEnglish: 'Commercial Search',
      description: 'Busqueda Comercial',
      paymentRight: { id: 2, name: '1a. Presentación de solicitud marca' },
      multiple: false,
      article: { name: 'Horas' },
      feePeso: '1293.11',
      feeDollar: '150',
      uniqKey: { name: 'LH' },
      agent: null,
      holder: null,
      concept: { name: 'Factura proveedor / asociado' },
      prepayment: false,
      status: true
    }
  ];

  const prevLinks = [{ link: LINK_CATALOGS, nombre: TITLE_CATALOGS }];

  const actions = [<IconAdd onClick={openModal} />];

  // functions
  const onEdit = (selectedRow) => {
    setRow(selectedRow);
    openModal();
  };

  const onCancel = () => {
    setRow(null);
    closeModal();
  };

  const columns = InvoicingConceptsColumns({ onEdit });

  return {
    isLoading: false,
    prevLinks,
    invoicingConcepts,
    columns,
    actions,
    isOpen,
    onCancel,
    row
  };
};

export default useInvoicingConcepts;
