import { SIZES } from '@Const/styles';
import { getJobAreaMainName } from '@Utils/user';
import React from 'react';
import BadgeBool from '../badge/BadgeBool';
import Flex from '../flex/Flex';
import ImageAvatar from '../image/ImageAvatar';
import LinkSeeMore from '../link/LinkSeeMore';
import Text from '../text/Text';
import Card from './Card';
import CardText from './CardText';

const CardUser = ({ user: { usrStatus, usrName, usrEmail, usrId, jobAreaUsers } }) => (
  <Card>
    <Card.Header>
      <Flex gap={SIZES.EIGHT}>
        <ImageAvatar />
        <Text isBold>{usrName}</Text>
      </Flex>
      <BadgeBool isValid={usrStatus} />
    </Card.Header>
    <Card.Body>
      <CardText title="Área principal" value={getJobAreaMainName(jobAreaUsers)} />
      <CardText title="Correo" value={usrEmail} />
    </Card.Body>
    <Card.Footer>
      <LinkSeeMore to={`/catalogos/usuarios/${usrId}`}/>
    </Card.Footer>
  </Card>
);

export default CardUser;
