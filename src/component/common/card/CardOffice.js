import React from 'react';
import Grid from '../grid/Grid';
import LinkSeeMore from '../link/LinkSeeMore';
import Text from '../text/Text';
import Card from './Card';
import CardText from './CardText';

const CardOffice = ({ office : { offId, offEmail } }) => (
  <Card>
    <Card.Body className='pt-3'>
      <Text isBold>Oficina</Text>
      <Text className='mb-3'>
        <Text isSpan isPrimary isBold>
          Los Angelés
        </Text>
        Los Ángeles, 200 N. Spring Street, Los Angeles CA 90012, United States
      </Text>
      <Grid repeat={2} gap={5}>
        <CardText title="Teléfono" value="52353252352" />
        <CardText title="RFC" value="XEXX010101000" />
        <CardText title="Correo" value={offEmail} />
      </Grid>
    </Card.Body>
    <Card.Footer>
      <LinkSeeMore to={`${offId}`}/>
    </Card.Footer>
  </Card>
);
export default CardOffice;
