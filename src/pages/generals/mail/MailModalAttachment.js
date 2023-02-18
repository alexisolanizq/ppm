import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Dialog, Button, Box, Avatar } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import BootstrapDialogTitle from '@Component/common/dialogs/BootstrapDialogTitle';
import InputMails from '@Component/common/inputMails';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));

const MailModalAttachment = ({
  modalShow,
  setmodalShow,
  mailData,
  replyMail,
  emailsReply,
  setEmailsReply,
  setReplyMessage,
  replyMessage
}) => {
  const [isReplyActive, setIsReplyActive] = useState(false);
  const [isFowardActive, setIsFowardActive] = useState(false);
  const onReply = () => {
    setIsFowardActive(false);
    setIsReplyActive(!isReplyActive);
  };
  const onFoward = () => {
    setIsReplyActive(false);
    setIsFowardActive(!isFowardActive);
  };

  return (
    <BootstrapDialog
      open={modalShow}
      onClose={() => {
        setmodalShow(false);
        setIsFowardActive(false);
        setIsReplyActive(false);
      }}
      aria-labelledby="customized-dialog-title"
      fullWidth={Boolean(true)}
    >
      <BootstrapDialogTitle
        id="customized-dialog-title"
        onClose={() => {
          setmodalShow(false);
          setIsFowardActive(false);
          setIsReplyActive(false);
        }}
        onReply={onReply}
        onFoward={onFoward}
        modalMail={Boolean(true)}
      >
        <Box className="d-flex">
          <Avatar className="mr-3 w-45">
            {mailData && mailData.from.charAt(0)}
          </Avatar>
          <Box>
            <h3 className="text-left fs-3">Remitente</h3>
            <h2 className="text-left fs-3">{mailData && mailData.from}</h2>
          </Box>
        </Box>
        <h2 className="text-left fs-3">{mailData && mailData.subject}</h2>
      </BootstrapDialogTitle>
      {isFowardActive && (
        <InputMails
          label="Para"
          emails={emailsReply}
          setEmails={setEmailsReply}
        />
      )}
      <Box className="p-3">
        <p>{mailData && mailData.emailBody}</p>
      </Box>
      {isReplyActive && (
        <Box className="m-3 d-flex flex-column align-items-end">
          <ReactQuill
            theme="snow"
            className="w-100"
            value={replyMessage}
            onChange={(e) => setReplyMessage(e)}
          />
          <Button
            onClick={() => {
              replyMail();
            }}
            className="w-fit mt-05"
            variant="contained"
          >
            Enviar
          </Button>
        </Box>
      )}
    </BootstrapDialog>
  );
};

export default MailModalAttachment;
