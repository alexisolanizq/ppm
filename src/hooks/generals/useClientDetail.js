import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { LINK_CLIENT } from '@Const/links';
import LinkIconText from '@Component/common/link/LinkIconText';
import React from 'react';
import {
  useRowClientService,
  useUpdateAdmStatusClientService
} from '@Services/client/useClientService';
import { useParams } from 'react-router';
import { PAGE_TITLE_OFFICES, TITLE_CLIENT } from '@Const/generals';

const useClientDetail = () => {
  const { clientId } = useParams();

  // apis
  const { data: agent, isLoading } = useRowClientService(clientId);
  const updateMutation = useUpdateAdmStatusClientService(clientId);

  // functions
  const onChangeAdmStatus = ({ target: { value } }) => {
    const body = {
      ageAdmStatus: value,
      ageId: clientId
    };
    updateMutation.mutate(body);
  };

  const prevLinks = [{ link: LINK_CLIENT, nombre: TITLE_CLIENT }];

  const actions = [
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
    { text: 'Subir al EVirtual', to: 'evirtual/subir' },
    { text: 'Consultar EVirtual', to: 'evirtual' },
    { text: 'Cargar a Mindbreeze', to: '/' },
    { text: 'Consultar a Mindbreeze', to: '/' },
    { text: 'Generar factura', to: '/' },
    { text: 'Generar prefactura', to: '/' },
    { text: 'Generar factura asociado', to: '/' },
    { text: 'Lista de facturas', to: '/' },
    { text: 'Lista de instrucciones', to: '/' }
  ];

  const isLoadingMutation = updateMutation.isLoading;

  return {
    agent,
    isLoading,
    onChangeAdmStatus,
    isLoadingMutation,
    prevLinks,
    actions,
    sidebar
  };
};

export default useClientDetail;
