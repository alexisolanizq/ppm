import React, { cloneElement } from 'react';
import Flex from '../flex/Flex';

const Actions = ({ actions = [], gap = 8 }) => (
  <Flex className='actions' gap={gap}>
    {actions.map((children, index) =>
      cloneElement(children, {
        key: `actions-element-${index}`
      })
    )}
  </Flex>
);

export default Actions;
