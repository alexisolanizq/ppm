import React from 'react';
import { DISCOUNT } from '@Const/const';
import Card from '@Component/common/card/Card';
import Flex from '@Component/common/flex/Flex';
import ImageAvatar from '@Component/common/image/ImageAvatar';
import Text from '@Component/common/text/Text';
import Grid from '@Component/common/grid/Grid';
import LinkSeeMore from '@Component/common/link/LinkSeeMore';
import { ASSOCIATED_AGENTS, RGP_NUMBER } from '@Const/generals';
import CustomTooltip from '@Component/common/tooltip/Tooltip';

const CardHolder = ({ holder, toggleTooltipClick, openTooltip, index }) => (
  <Card>
    <Card.Header>
      <Flex gap={10}>
        <ImageAvatar height={42} width={42} />
        <div>
          <Text isBold isGray>
            {holder.holName} {holder.holLastName}
          </Text>
        </div>
      </Flex>
    </Card.Header>
    <Card.Body>
      <Grid repeat={2} gap={5} className="mb-3">
        <div>
          <Text isGray>{RGP_NUMBER}</Text>
          <Text isPrimary isUnderline>
            {holder?.holNumberRpg}
          </Text>
        </div>
        <div>
          <Text isGray>{DISCOUNT}</Text>
          <Text>{holder?.holDiscount}%</Text>
        </div>
      </Grid>
      <div>
        <CustomTooltip
          index={index}
          open={openTooltip}
          onAction={toggleTooltipClick}
          buttonTitle={ASSOCIATED_AGENTS}
        />
      </div>
    </Card.Body>
    <Card.Footer>
      <LinkSeeMore to={`${holder.holId}`} />
    </Card.Footer>
  </Card>
);

export default CardHolder;
