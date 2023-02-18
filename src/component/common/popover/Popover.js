import React from 'react';
import { Popover } from '@mui/material';
import Button from '@Component/common/button/Button';
import EmptyGrid from '@Component/common/empty/EmptyGrid';
import Text from '@Component/common/text/Text';
import { MORE } from '@Const/catalogs';

const PopoverComponent = ({
  key = '',
  content = [],
  contentIdShow = 'name'
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? key : undefined;

  return (
    <>
      <Button isBorderPrimary onClick={handleClick}>
        {MORE}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
      >
        {content.length > 0 ? (
          content.map((item, index) => (
            <Text key={index} isPrimaryText>
              {item[contentIdShow]}
            </Text>
          ))
        ) : (
          <EmptyGrid />
        )}
      </Popover>
    </>
  );
};

export default PopoverComponent;
