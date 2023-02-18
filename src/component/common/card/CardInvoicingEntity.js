import React from 'react';

import { DEFAULT_WORD } from '@Const/const';
import { FILES_SOURCE_INVOICING_ENTITY } from '@Const/files';

import Card from './Card';
import Flex from '../flex/Flex';
import Text from '../text/Text';
import LinkSeeMore from '../link/LinkSeeMore';
import ImageApi from '../image/ImageApi';

const CardInvoicingEntity = ({ invoicingEntity, invoicingEntityDefault }) => (
  <Card>
    <Card.Header>
      <Flex gap={10}>
        <ImageApi
          source={FILES_SOURCE_INVOICING_ENTITY}
          id={invoicingEntity?.bienId}
        />
        <div>
          <Text isBold isGray>
            {`${invoicingEntity?.bienName}
              ${invoicingEntity.bienFirstName ?? ''}
              ${invoicingEntity.bienLastName ?? ''}`}
          </Text>
          {invoicingEntityDefault && (
            <Text className="mb-3" isSpan isSecondaryText isBold>
              {DEFAULT_WORD}
            </Text>
          )}
        </div>
      </Flex>
    </Card.Header>
    <Card.Body>
      <div className="mb-3">
        <Text isGray>RFC</Text>
        <Text isBold>{invoicingEntity.bienRfc}</Text>
        <Text isGray>Dirección</Text>
        <Text isBold>
          {`${invoicingEntity?.bienStreet}
          ${invoicingEntity?.bienColony}
          ${invoicingEntity?.bienCity}
          ${invoicingEntity?.bienTownship}
          ${invoicingEntity?.bienState}
          C.P. ${invoicingEntity?.bienCodePostal}`}
        </Text>
      </div>
    </Card.Body>
    <Card.Footer>
      <LinkSeeMore to={`${invoicingEntity?.bienId}`} />
    </Card.Footer>
  </Card>
);

export default CardInvoicingEntity;
