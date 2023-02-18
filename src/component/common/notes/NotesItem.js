import React from 'react';
import { Box } from '@mui/material';
import Flex from '@Component/common/flex/Flex';
import Text from '@Component/common/text/Text';
import { COLORS } from '@Const/styles';
import Icon from '../icon/Icon';

const NotesItem = ({
  title,
  content,
  color = COLORS.NOTE_SUCCESS,
  actions = [],
  ...props
}) => (
  <Box sx={{ backgroundColor: color, padding: 1 }} {...props}>
    <Flex align='' isVertical className="flex-start">
      <Text sx={{ color: { color } }} isBold>
        {title}
      </Text>
      <Text>{content}</Text>
      <Flex justify='end'>
        {actions.map((item, index) => (
          <Icon
            key={index}
            icon={item.icon}
            onClick={() => {}}
            color={item.color}
          />
        ))}
      </Flex>
    </Flex>
  </Box>
);

export default NotesItem;
