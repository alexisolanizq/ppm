import { LINK_CLIENT } from '@Const/links';
import {
  getAddressClient,
  getCountryName,
  getNameClient,
  getRFC,
  getRolesClient,
  getTelephoneClient
} from '@Utils/client';
import React from 'react';
import BadgeBool from '../badge/BadgeBool';
import Flex from '../flex/Flex';
import Grid from '../grid/Grid';
import ImageAvatar from '../image/ImageAvatar';
import LinkSeeMore from '../link/LinkSeeMore';
import Text from '../text/Text';
import Card from './Card';
import CardText from './CardText';

const CardAgent = ({
  agent: {
    ageAdmStatus,
    ageEmail,
    ageId,
    agentTelephones,
    agentRoles,
    agentAddresses,
    agentBillingEntities,
    ...row
  }
}) => (
  <Card>
    <Card.Header>
      <Flex gap={10}>
        <ImageAvatar height={42} width={42} />
        <div>
          <Text isBold>{getNameClient(row)}</Text>
          <Text isMedium isPrimary>
            {getRolesClient(agentRoles)}
          </Text>
        </div>
      </Flex>
      <BadgeBool
        isValid={ageAdmStatus === 'cumplido'}
        textPositive="Cumplido"
        textNegative="Moroso"
      />
    </Card.Header>
    <Card.Body>
      <CardText
        className="mb-1"
        title="Oficina"
        value={getAddressClient(agentAddresses)}
      />
      <Grid repeat={2} gap={5} className="mb-1">
        <CardText
          title="Teléfono"
          value={getTelephoneClient(agentTelephones)}
        />
        <CardText title="RFC" value={getRFC(agentBillingEntities)} />
      </Grid>
      <CardText className='mb-1' title="Correo" value={ageEmail} />
      <CardText title='País' value={getCountryName(agentAddresses)}/>
    </Card.Body>
    <Card.Footer>
      <LinkSeeMore to={`${LINK_CLIENT}/${ageId}`} />
    </Card.Footer>
  </Card>
);

export default CardAgent;
