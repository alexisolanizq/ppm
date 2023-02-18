import React from 'react';
import { LINK_CONTACT } from '@Const/links';
import Flex from '@Component/common/flex/Flex';
import Text from '@Component/common/text/Text';
import Card from '@Component/common/card/Card';
import DivWidth from '@Component/common/div/DivWidth';
import CardText from '@Component/common/card/CardText';
import LinkSeeMore from '@Component/common/link/LinkSeeMore';
import ImageAvatar from '@Component/common/image/ImageAvatar';
import { FIELDS_LABELS, FIELDS_PHONE, FIELDS_EMAIL } from '@Const/formsFields';
import {
  getContactLabels,
  getContactName,
  getTelephoneContact
} from '@Utils/contact';

const CardContact = ({
  contact: { conId, conEmail, contactLabels = [], contactPhones = [], ...row }
}) => (
  <Card>
    <Card.Header>
      <Flex gap={10}>
        <ImageAvatar height={42} width={42} />
        <DivWidth>
          <Text isBold>{getContactName(row)}</Text>
        </DivWidth>
      </Flex>
    </Card.Header>
    <Card.Body>
      <CardText
        className="mb-3"
        title={FIELDS_LABELS}
        value={getContactLabels(contactLabels)}
      />
      <CardText
        className="mb-3"
        title={FIELDS_PHONE}
        value={getTelephoneContact(contactPhones)}
      />
      <CardText className="mb-3" title={FIELDS_EMAIL} value={conEmail} />
    </Card.Body>
    <Card.Footer>
      <LinkSeeMore to={`${LINK_CONTACT}/${conId}`} />
    </Card.Footer>
  </Card>
);

export default CardContact;
