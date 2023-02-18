import Flex from '@Component/common/flex/Flex';
import ImageAvatar from '@Component/common/image/ImageAvatar';
import LinkIconText from '@Component/common/link/LinkIconText';
import EditIcon from '@mui/icons-material/Edit';
import Text from '@Component/common/text/Text';
import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DivWidth from '@Component/common/div/DivWidth';
import Notes from '@Component/common/notes/Notes';
import NotesItem from '@Component/common/notes/NotesItem';
import TitleValue from '@Component/common/text/TitleValue';
import {
  getAddressClient,
  getAgentAdmChargeableOrUncollectibe,
  getChangeType,
  getCountryName,
  getCurrency,
  getNameClient,
  getRolesClient,
  getTaxationPercentage
} from '@Utils/client';
import TitleRol from '@Component/common/text/TitleRol';
import SelectMor from '@Component/common/select/SelectMor';
import IconElement from '@Component/common/icon/IconElement';

const ClientDetailContent = ({
  onChangeAdmStatus,
  agent: {
    ageAdmStatus,
    typePerson: { name: typePersonName },
    ageEmail,
    language: { lanName },
    agentAddresses,
    agentTelephones,
    agentRoles,
    countryFiscalResidence,
    ageFax,
    ageWebSite,
    agentAdms,
    agentBanks,
    agentInvoicings,
    ...restAgent
  }
}) => (
  <Flex align="start" gap={50}>
    <DivWidth px={150}>
      <ImageAvatar className="mb-3" width={150} height={150} />
      <SelectMor
        value={ageAdmStatus}
        onChange={onChangeAdmStatus}
      />
      <LinkIconText to="editar" icon={EditIcon} text="Modificar cliente" />
    </DivWidth>
    <DivWidth px="auto">
      <Text isPrimaryText>PERSONA {typePersonName}</Text>
      <Text isBig isBold>
        {getNameClient(restAgent)}
      </Text>
      <Text isPrimary isBig isBold>
        {getRolesClient(agentRoles)}
      </Text>
      <Text className="mb-4">
        <IconElement icon={LocationOnIcon} color="gray" />
        {getCountryName(agentAddresses)}
      </Text>
      <TitleValue title="Domicilio">
        {getAddressClient(agentAddresses)}
      </TitleValue>
      <TitleValue title="Recidencial Fiscal">
        {countryFiscalResidence.counNameSpa}
      </TitleValue>
      {agentTelephones.map(({ agteId, agteCountryCode, agteNumber }) => (
        <TitleValue key={`agent-telephone-${agteId}`} title="Teléfono">
          {agteCountryCode} {agteNumber}
        </TitleValue>
      ))}
      <TitleValue title="Email">{ageEmail}</TitleValue>
      {ageFax && <TitleValue title="Fax">{ageFax}</TitleValue>}
      <TitleValue title="Idioma de correspondencia">{lanName}</TitleValue>
      <TitleValue title="Tipo de divisa">{getCurrency(agentInvoicings)}</TitleValue>
      <TitleValue title="Tipo de cambio">{getChangeType(agentInvoicings)}</TitleValue>
      <TitleValue title="Porcentaje tributación">{getTaxationPercentage(agentInvoicings)}%</TitleValue>
      {ageWebSite && <TitleValue title="Sitio web">{ageWebSite}</TitleValue>}
      <TitleValue title="Término factura cobrable">
        {getAgentAdmChargeableOrUncollectibe(agentAdms)}
      </TitleValue>
      <TitleValue title="Término factura incobrable">
        {getAgentAdmChargeableOrUncollectibe(agentAdms, true)}
      </TitleValue>
      {agentBanks &&
        agentBanks.map(
          ({
            agbaId,
            ppmBank,
            role,
            agacBankAccount,
            agacForeignBankAccount,
            paymentForm,
            paymentMethod
          }) => (
            <div key={`client-bank-detail-${agbaId}`}>
              <TitleRol title={role.name} />
              <TitleValue isHalf title="Banco">
                {ppmBank.ppbaName} - {agacBankAccount}
              </TitleValue>
              <TitleValue isHalf title="Forma y Método de pago">
                {paymentForm.name} - {paymentMethod.name}
              </TitleValue>
              <TitleValue isHalf title="Banco extranjero:">
                {agacForeignBankAccount}
              </TitleValue>
            </div>
          )
        )}
    </DivWidth>
    <DivWidth px="400">
      <Notes cardTitle="Notas">
        <NotesItem
          title="Actualizar anualidades por"
          content="Cuando lleguen titulos actualizar a anualidades por terceros"
        />
        <NotesItem
          title="Actualizar anualidades por"
          content="Cuando lleguen titulos actualizar a anualidades por terceros"
        />
      </Notes>
    </DivWidth>
  </Flex>
);

export default ClientDetailContent;
