import DivWidth from '@Component/common/div/DivWidth';
import Flex from '@Component/common/flex/Flex';
import IconElement from '@Component/common/icon/IconElement';
import ImageAvatar from '@Component/common/image/ImageAvatar';
import LinkIconText from '@Component/common/link/LinkIconText';
import SelectMor from '@Component/common/select/SelectMor';
import Text from '@Component/common/text/Text';
import TitleValue from '@Component/common/text/TitleValue';
import EditIcon from '@mui/icons-material/Edit';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React from 'react';

const OfficeDetailContent = ({
  office: { offName, offEmail, offFax, languageCorrespondence, currency }
}) => (
  <Flex align="start" gap={50}>
    <DivWidth px={150}>
      <ImageAvatar className="mb-3" width={150} height={150} />
      <SelectMor value="cumplido" />
      <LinkIconText to="editar" icon={EditIcon} text="Modificar oficina" />
    </DivWidth>
    <DivWidth px="auto">
      <Text isPrimaryText>PERSONA</Text>
      <Text isBig isBold>
        {offName}
      </Text>
      <Text isPrimary isBig isBold>
        Cliente, Proveedor
      </Text>
      <Text className="mb-4">
        <IconElement icon={LocationOnIcon} color="gray" />
        México
      </Text>
      <TitleValue title="Domicilio">Dirección</TitleValue>
      <TitleValue title="Teléfono">Telefono</TitleValue>
      <TitleValue title="Email">{offEmail}</TitleValue>
      {offFax && <TitleValue title="Fax">{offFax}</TitleValue>}
      <TitleValue title="Idioma de correspondencia">
        {languageCorrespondence?.lanName}
      </TitleValue>
      <TitleValue title="Email">{offEmail}</TitleValue>
      <TitleValue title="Tipo de divisa">{currency.currAbbreviation}</TitleValue>
      <TitleValue title="Descuento cliente">0%</TitleValue>
      <TitleValue title="Sitio web">www.empresa.com</TitleValue>
      <TitleValue title="Banco">111111111 - Santander</TitleValue>
      <TitleValue title="Porcentaje de tributación">0%</TitleValue>
    </DivWidth>
  </Flex>
);

export default OfficeDetailContent;
