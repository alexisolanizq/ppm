import React from 'react';
import Flex from '@Component/common/flex/Flex';
import ImageAvatar from '@Component/common/image/ImageAvatar';
import LinkIconText from '@Component/common/link/LinkIconText';
import Notes from '@Component/common/notes/Notes';
import NotesItem from '@Component/common/notes/NotesItem';
import Text from '@Component/common/text/Text';
import { POWER_LETTER } from '@Const/catalogs';
import { DISCOUNT, STATUS } from '@Const/const';
import {
  ADDRESS,
  PHYSICAL_PERSON,
  RGP_NUMBER,
  UPDATE_HOLDER
} from '@Const/generals';
import { Delete, Edit } from '@mui/icons-material';
import { COLORS } from '@Const/styles';
import DivWidth from '@Component/common/div/DivWidth';
import TitleValue from '@Component/common/text/TitleValue';

const HolderDetails = () => (
  <Flex align="start" gap={50}>
    <DivWidth px={200}>
      <ImageAvatar className="mb-4" width={150} height={150} />
      <LinkIconText icon={Edit} text={UPDATE_HOLDER} to="/titulares/1/editar" />
    </DivWidth>
    <DivWidth px="auto">
      <Text isPrimaryText> {PHYSICAL_PERSON} </Text>
      <Text isBig isBold className="mb-4">
        Juan José Jiménez Sánchez
      </Text>
      <TitleValue title={ADDRESS} isPrimary>
        México
      </TitleValue>
      <TitleValue title={RGP_NUMBER} isPrimary>
        654321
      </TitleValue>
      <TitleValue title={POWER_LETTER} isPrimary>
        Carta poder.pdf
      </TitleValue>
      <TitleValue title={DISCOUNT} isPrimary>
        {DISCOUNT}
      </TitleValue>
    </DivWidth>
    <DivWidth px="400">
      <Notes cardTitle={STATUS}>
        <NotesItem
          title="Actualizar anualidades por"
          content="Cuando lleguen titulos actualizar a anualidades por terceros"
          actions={[{ icon: Edit }, { icon: Delete }]}
        />
        <NotesItem
          title="Actualizar anualidades por"
          content="Cuando lleguen titulos actualizar a anualidades por terceros"
          color={COLORS.NOTE_DANGER}
          actions={[{ icon: Delete }]}
        />
        <NotesItem
          title="Actualizar anualidades por"
          content="Cuando lleguen titulos actualizar a anualidades por terceros"
          actions={[{ icon: Edit }, { icon: Delete }]}
        />
        <NotesItem
          title="Actualizar anualidades por"
          content="Cuando lleguen titulos actualizar a anualidades por terceros"
          actions={[{ icon: Delete }]}
        />
      </Notes>
    </DivWidth>
  </Flex>
);

export default HolderDetails;
