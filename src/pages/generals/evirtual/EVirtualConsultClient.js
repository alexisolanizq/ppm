import React from 'react';

import GeneralLayout from '@Component/layout/GeneralLayout';

import { PAGE_TITLE_EVIRTUAL } from '@Const/generals';

import useEVirtualConsultClient from '@Hooks/generals/useEVirtualConsultClient';

const EVirtualConsultClient = () => {
  const { isLoading, prevLinks } = useEVirtualConsultClient();

  return (
    <>
      <GeneralLayout
        title={PAGE_TITLE_EVIRTUAL}
        prevLinks={prevLinks}
        isLoading={isLoading}
      />
      <iframe
        title="This is a pdf example"
        src="https://sid-inico.usal.es/idocs/F8/FDO20199/guia_de_accesibilidad_en_documentos_pdf_60.pdf"
        style={{ width: '100%', height: '700px' }}
      />
    </>
  );
};

export default EVirtualConsultClient;
