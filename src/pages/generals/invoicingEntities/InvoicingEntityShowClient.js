import React from 'react';

import Edit from '@mui/icons-material/Edit';

import Flex from '@Component/common/flex/Flex';
import Text from '@Component/common/text/Text';
import DivWidth from '@Component/common/div/DivWidth';
import ImageApi from '@Component/common/image/ImageApi';
import TitleValue from '@Component/common/text/TitleValue';
import GeneralLayout from '@Component/layout/GeneralLayout';
import LinkIconText from '@Component/common/link/LinkIconText';
import FormSectionTitle from '@Component/common/form/FormSectionTitle';
import ConfirmationDialog from '@Component/common/dialogs/ConfirmationDialog';

import { textCapitalize } from '@Utils/text';
import { getNameEntity, getAddressEntity } from '@Utils/invoicingEntity';

import { DEFAULT_WORD } from '@Const/const';
import { FILES_SOURCE_INVOICING_ENTITY } from '@Const/files';
import { PAGE_TITLE_SHOW_INVOICING_ENTITY } from '@Const/generals';

import useInvoicingEntityShowClient from '@Hooks/generals/useInvoicingEntityShowClient';

const InvoicingEntityShowClient = () => {
  const {
    currentInvoicingEntity,
    isLoading,
    prevLinks,
    actionsToolbar,
    isSuccess,
    isOpen,
    closeModal,
    toggleDefault
  } = useInvoicingEntityShowClient();

  if (!isSuccess || !currentInvoicingEntity) return null;

  const entity = currentInvoicingEntity.billingEntity;
  const name = getNameEntity(entity);

  return (
    <>
      <GeneralLayout
        title={PAGE_TITLE_SHOW_INVOICING_ENTITY}
        prevLinks={prevLinks}
        actions={actionsToolbar}
        isLoading={isLoading}
        isTitleFlex
        titleCustom={name}
      >
        <Flex align="start" justify="center" gap={50} className="mt-07">
          <Flex isVertical gap={5}>
            <ImageApi
              source={FILES_SOURCE_INVOICING_ENTITY}
              id={entity?.bienId}
              height={120}
              width={120}
            />
            <LinkIconText icon={Edit} text="Modificar" to="modificar" />
          </Flex>
          <DivWidth px="auto">
            <h5 className="mb-3">{name}</h5>
            {currentInvoicingEntity?.agbeMain && (
              <Text className="mb-3" isSecondaryText isBold>
                {DEFAULT_WORD}
              </Text>
            )}
            <TitleValue title="Tipo de entidad:">
              {textCapitalize(entity.typePerson?.name)}
            </TitleValue>
            <TitleValue title="Régimen:">{entity.regime?.name}</TitleValue>
            <TitleValue title="Domicilio:">
              {getAddressEntity(entity)}
            </TitleValue>
            <TitleValue title="RFC:">{entity.bienRfc}</TitleValue>
            <TitleValue title="VAT o NIF:">
              {entity.billingEntityForeign?.biefVatNif}
            </TitleValue>
            <TitleValue title="Estado:">
              {entity.bienStatus ? 'Activo' : 'Inactivo'}
            </TitleValue>
            <FormSectionTitle title="Administración" />
            <TitleValue title="Uso de CFDI:">{entity.cfdi?.name}</TitleValue>
            <TitleValue title="Orden de compra:">
              {entity?.bienPurchaseOrder}
            </TitleValue>
          </DivWidth>
        </Flex>
      </GeneralLayout>
      <ConfirmationDialog
        open={isOpen}
        onClose={closeModal}
        acctionOk={toggleDefault}
      >
        <Text className="text-center" isPrimary isRegular isSpan>
          ¿Estás seguro que la entidad de facturación:&nbsp;
          <Text isBold isSpan>
            {name}
          </Text>
          , sea la&nbsp;
          <Text isBold isSpan>
            predeterminada
          </Text>
          ?
        </Text>
      </ConfirmationDialog>
    </>
  );
};

export default InvoicingEntityShowClient;
