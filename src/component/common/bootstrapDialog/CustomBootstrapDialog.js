import styled from '@emotion/styled';
import { Close } from '@mui/icons-material';
import { Button, Dialog, DialogTitle, IconButton, Switch } from '@mui/material';
import React from 'react';

const CustomBootstrapDialog = () => {
  const BootstrapDialog = styled(Dialog)(() => ({
    '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper': {
      padding: '25px 50px 45px',
      width: '100%'
    },
    '& .MuiDialogContent-root': {
      padding: '10px 25px'
    },
    '& .MuiDialogActions-root': {
      padding: '40px 25px 0px'
    }
  }));

  const AntSwitch = styled(Switch)(() => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      }
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: '#0ad69d!important'
        }
      }
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 12,
      height: 12,
      borderRadius: 6
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      boxSizing: 'border-box',
      backgroundColor: '#3333'
    }
  }));

  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500]
            }}
          >
            <Close />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };

  const CancelButton = styled(Button)(() => ({
    backgroundColor: '#d5d5d5',
    padding: '5px 30px',
    color: '#7c7c7c!important',
    '&:hover': {
      backgroundColor: '#d5d5d5',
      color: '#7c7c7c'
    },
    textTransform: 'capitalize'
  }));

  const SubmitButton = styled(Button)(() => ({
    backgroundColor: '#005953',
    padding: '5px 30px',
    color: '#fff!important',
    '&:hover': {
      backgroundColor: '#005953',
      color: '#fff'
    },
    textTransform: 'capitalize'
  }));

  return {
    BootstrapDialog,
    BootstrapDialogTitle,
    CancelButton,
    SubmitButton,
    AntSwitch
  };
};

export default CustomBootstrapDialog;
