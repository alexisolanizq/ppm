import { Button, Tooltip } from '@mui/material';
import React from 'react';

const CustomTooltip = ({ buttonTitle, onAction, open, index }) => (
  <Tooltip
    onClose={() => onAction(null)}
    open={open === index}
    title={
      // * Here add map function to add dynamicly
      <>
        <p>Rosa Alcantara</p>
        <p>María Altamirano</p>
        <p>Gerardo Benitez</p>
      </>
    }
    arrow
    PopperProps={{
      disablePortal: true
    }}
    disableFocusListener
    disableTouchListener
  >
    <Button
      size="small"
      sx={{
        color: '#005953',
        textTransform: 'capitalize',
        margin: 0,
        padding: 0
      }}
      onClick={() => onAction(index)}
    >
      {buttonTitle}
    </Button>
  </Tooltip>
);

export default CustomTooltip;
