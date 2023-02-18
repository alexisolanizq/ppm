import { FILES_SOURCE_EMPLOYEE } from '@Const/files';
import { SIZES } from '@Const/styles';
import { getFullNameEmployee, getTelephoneEmployee } from '@Utils/employee';
import React from 'react';
import Flex from '../flex/Flex';
import ImageApi from '../image/ImageApi';
import LinkSeeMore from '../link/LinkSeeMore';
import Text from '../text/Text';
import Card from './Card';
import CardText from './CardText';

const CardEmployee = ({
  employee: {
    empEmail,
    contactTelephonesEmployees,
    empId,
    ...employee
  }
}) => (
  <Card>
    <Card.Header>
      <Flex gap={SIZES.EIGHT}>
        <ImageApi
          source={FILES_SOURCE_EMPLOYEE}
          width={30}
          height={30}
          id={empId}
        />
        <Text isBold>{getFullNameEmployee(employee)}</Text>
      </Flex>
    </Card.Header>
    <Card.Body>
      <CardText
        className="mb-1"
        title="Teléfono"
        value={getTelephoneEmployee(contactTelephonesEmployees)}
      />
      <CardText title="Correo" value={empEmail} />
    </Card.Body>
    <Card.Footer>
      <LinkSeeMore to={`/catalogos/empleados/${empId}`} />
    </Card.Footer>
  </Card>
);

export default CardEmployee;
