import React from 'react';

import { Link } from 'react-router-dom';

import { IconButton } from '@mui/material';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import Icon from './Icon';
import Flex from '../flex/Flex';
import Text from '../text/Text';

const IconTextSelect = ({
  onClick = () => {},
  colorIcon = 'primary',
  to = null,
  className = '',
  text = ''
}) => {
  if (to) {
    return (
      <Link to={to}>
        <div className="menuItemFixed">
          <Text isPrimary>{text}</Text>
          <IconButton className={className}>
            <AddCircleOutlineIcon className={`icon-${colorIcon}`} />
          </IconButton>
        </div>
      </Link>
    );
  }

  return (
    <button type="button" className="addFixed">
      <Flex>
        <Text isPrimary>{text}</Text>
        <Icon
          icon={AddCircleOutlineIcon}
          onClick={onClick}
          width={20}
          className={`icon-${colorIcon}`}
        />
      </Flex>
    </button>
  );
};

export default IconTextSelect;
