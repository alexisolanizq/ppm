import React from 'react';

import Card from './Card';
import Flex from '../flex/Flex';
import Text from '../text/Text';
import LinkSeeMore from '../link/LinkSeeMore';

const CardRecipient = () => (
  <Card>
    <Card.Header>
      <Flex gap={10}>
        <Text isBold isGray>
          Rol del cliente
        </Text>
      </Flex>
    </Card.Header>
    <Card.Body>
      <div className="mb-3">
        <Text isGray>Tipo de lista de destinatario</Text>
        <Text isBold>Acción en la gestión del trámite</Text>
      </div>
    </Card.Body>
    <Card.Footer>
      <LinkSeeMore to="1" />
    </Card.Footer>
  </Card>
);

export default CardRecipient;
