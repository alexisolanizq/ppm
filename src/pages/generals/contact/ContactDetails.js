import React from 'react';
import Flex from '@Component/common/flex/Flex';
import DivWidth from '@Component/common/div/DivWidth';
import ImageAvatar from '@Component/common/image/ImageAvatar';
import LinkIconText from '@Component/common/link/LinkIconText';
import { Edit } from '@mui/icons-material';
import { EDIT_CONTACT } from '@Const/generals';
import Text from '@Component/common/text/Text';
import TitleValue from '@Component/common/text/TitleValue';
import {
  FIELDS_EMAIL,
  FIELDS_FAX,
  FIELDS_LABELS,
  FIELDS_PHONE,
  FIELDS_TITLE
} from '@Const/formsFields';
import { LINK_CONTACT_EDIT } from '@Const/links';
import LabelModal from '@Component/common/label/LabelModal';
import useModal from '@Hooks/common/useModal';

const ContactDetails = ({ labels }) => {
  const { openModal, isOpen, closeModal } = useModal();
  return (
    <Flex className="mt-5" justify="center" gap={50}>
      <DivWidth px={150}>
        <ImageAvatar className="mb-3" width={150} height={150} />
        <LinkIconText icon={Edit} text={EDIT_CONTACT} to={LINK_CONTACT_EDIT} />
      </DivWidth>
      <DivWidth px="auto">
        <Text className="mb-4" isBig isBold isGray>
          Gonzalo Pérez Martínez
        </Text>
        <TitleValue title={FIELDS_LABELS}>Oficina NY, Director</TitleValue>
        <TitleValue title={FIELDS_PHONE}>9331234567</TitleValue>
        <TitleValue title={FIELDS_EMAIL}>client@empresa.com</TitleValue>
        <TitleValue title={FIELDS_FAX}>+52 7801661183</TitleValue>
        <TitleValue title={FIELDS_TITLE}>Sr.</TitleValue>
        <LabelModal
          labels={labels}
          withSearch
          text={FIELDS_LABELS}
          openModal={openModal}
          isOpen={isOpen}
          closeModal={closeModal}
        />
      </DivWidth>
    </Flex>
  );
};

export default ContactDetails;
