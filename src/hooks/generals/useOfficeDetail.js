import { PAGE_TITLE_OFFICES, TITLE_CLIENT } from '@Const/generals';
import { LINK_CLIENT } from '@Const/links';
import { useRowClientService } from '@Services/client/useClientService';
import { getNameClient } from '@Utils/client';
import { useParams } from 'react-router';
import React from 'react';
import LinkIconText from '@Component/common/link/LinkIconText';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useRowOfficeService } from '@Services/office/useOfficeService';

const useOfficeDetail = () => {
  const { clientId, offId } = useParams();

  const { data: agent, isLoading: isLoadingClient } = useRowClientService(clientId);
  const { data: office, isLoading: isLoadingOffice } = useRowOfficeService(offId)

  const prevLinks = [
    { link: LINK_CLIENT, nombre: TITLE_CLIENT },
    { link: `${LINK_CLIENT}/${clientId}`, nombre: getNameClient(agent) },
    {
      link: `${LINK_CLIENT}/${clientId}/sucursales`,
      nombre: PAGE_TITLE_OFFICES
    }
  ];

  const actions = [
    <LinkIconText
      icon={RequestQuoteIcon}
      text="Definir envío de factura"
      to="/"
    />,
    <LinkIconText
      icon={AccountCircleIcon}
      text="Destinatarios"
      to="lista-destinatarios"
    />,
    <LinkIconText
      icon={AccountCircleIcon}
      text="Entidad de facturación"
      to="entidades-facturacion"
    />,
    <LinkIconText icon={AccountCircleIcon} text="Directorio" />,
    <LinkIconText
      icon={AccountCircleIcon}
      text={PAGE_TITLE_OFFICES}
      to="sucursales"
    />
  ];

  const sidebar = [
    { text: 'Subir al EVirtual', to: '/' },
    { text: 'Consultar EVirtual', to: '/' },
    { text: 'Generar factura', to: '/' },
    { text: 'Generar factura asociado', to: '/' },
    { text: 'Lista de facturas', to: '/' },
    { text: 'Lista de instrucciones', to: '/' }
  ];

  const isLoading = isLoadingClient || isLoadingOffice

  return {
    agent,
    isLoading,
    prevLinks,
    actions,
    sidebar,
    office
  };
};

export default useOfficeDetail;
