import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useDropzone } from 'react-dropzone';
import { useTheme, styled } from '@mui/material/styles';
import {
  Box,
  Portal,
  Button,
  Divider,
  Backdrop,
  IconButton,
  Typography,
  useMediaQuery,
  Input
} from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import InputMails from '@Component/common/inputMails';

const RootStyle = styled('div')(() => ({
  right: 0,
  bottom: 0,
  zIndex: 1999,
  minHeight: 440,
  outline: 'none',
  display: 'flex',
  position: 'fixed',
  overflow: 'hidden',
  flexDirection: 'column',
  margin: '1rem',
  boxShadow: '-1px 0px 5px #0000006b',
  borderRadius: '8px',
  backgroundColor: 'white'
}));

const InputStyle = styled(Input)(() => ({
  padding: '5px 5px',
  borderBottom: `solid 1px gray`
}));

const MailCompose = ({
  emails,
  emailsCC,
  emailsCCO,
  setShowCCO,
  setShowCc,
  setEmails,
  setEmailsCC,
  setEmailsCCO,
  isOpenCompose,
  onCloseCompose,
  createMail,
  dataMail,
  handleInstruction,
  createDraftMail,
  onDropAccepted,
  onDropRejected,
  showCc,
  showCCO
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [fullScreen, setFullScreen] = useState(false);
  const maxSize = 1000000;
  const accept = {
    'image/jpeg': [],
    'image/png': [],
    'text/pdf': ['.pdf', '.pdf']
  };
  const { getRootProps, acceptedFiles } = useDropzone({
    onDropAccepted,
    onDropRejected,
    maxSize,
    accept
  });

  const handleExitFullScreen = () => {
    setFullScreen(false);
  };

  const handleEnterFullScreen = () => {
    setFullScreen(true);
  };

  const handleClose = () => {
    onCloseCompose();
    setFullScreen(false);
  };

  const archivos = acceptedFiles.map((archivo) => (
    <Box
      key={archivo.lastModified}
      className="bg-white shadow-lg rounded"
      sx={{
        padding: '0.3rem 0.5rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}
    >
      <p>{archivo.path}</p>
      <IconButton
        onClick={() => {
          onCloseCompose();
        }}
      >
        <CloseFullscreenIcon width={20} height={20} />
      </IconButton>
    </Box>
  ));

  if (!isOpenCompose) {
    return null;
  }

  return (
    <Portal>
      <Backdrop open={fullScreen || isMobile} sx={{ zIndex: 1998 }} />
      <RootStyle
        sx={{
          ...(fullScreen && {
            top: 0,
            left: 0,
            zIndex: 1999,
            margin: 'auto',
            width: {
              xs: `calc(100% - 24px)`,
              md: `calc(100% - 80px)`
            },
            height: {
              xs: `calc(100% - 24px)`,
              md: `calc(100% - 80px)`
            }
          })
        }}
      >
        <Box
          sx={{
            pl: 3,
            pr: 1,
            height: 60,
            display: 'flex',
            alignItems: 'center',
            boxShadow: '-1px 0px 5px #0000006b'
          }}
        >
          <Typography variant="h6">Nuevo mensaje</Typography>
          <Box className="flex-grow-1" />

          <IconButton
            onClick={fullScreen ? handleExitFullScreen : handleEnterFullScreen}
          >
            {fullScreen ? (
              <CloseFullscreenIcon width={20} height={20} />
            ) : (
              <OpenInFullIcon width={20} height={20} />
            )}
          </IconButton>

          <IconButton
            onClick={() => {
              handleClose();
              createDraftMail();
            }}
          >
            <CloseIcon width={20} height={20} />
          </IconButton>
        </Box>

        <Divider />
        <InputMails label="Para" emails={emails} setEmails={setEmails} />
        {showCc && (
          <InputMails label="CC:" emails={emailsCC} setEmails={setEmailsCC} />
        )}
        {showCCO && (
          <InputMails
            label="CCO:"
            emails={emailsCCO}
            setEmails={setEmailsCCO}
          />
        )}
        <Box
          sx={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}
        >
          {!showCc && (
            <Button
              sx={{
                padding: '0px 5px',
                width: 'fit-content',
                margin: '0px',
                minWidth: 'auto'
              }}
              onClick={() => setShowCc(!showCc)}
              variant="text"
            >
              Cc
            </Button>
          )}
          {!showCCO && (
            <Button
              sx={{
                padding: '0px 5px',
                width: 'fit-content',
                margin: '0px',
                minWidth: 'auto'
              }}
              onClick={() => setShowCCO(!showCCO)}
              variant="text"
            >
              CCO
            </Button>
          )}
        </Box>

        <InputStyle
          disableUnderline
          placeholder="Asunto"
          value={dataMail.subject}
          onChange={(e) => handleInstruction('subject', e.target.value)}
        />
        <ReactQuill
          theme="snow"
          value={dataMail.message}
          onChange={(e) => handleInstruction('message', e)}
        />
        <Divider sx={{ marginTop: 'auto' }} />
        {acceptedFiles.length > 0 && (
          <Box>
            <ul style={{ padding: 0, margin: 0 }}>{archivos}</ul>
          </Box>
        )}
        <Box sx={{ py: 2, px: 3, display: 'flex', alignItems: 'center' }}>
          <Button
            onClick={() => {
              createMail();
            }}
            variant="contained"
          >
            Enviar
          </Button>

          <IconButton
            {...getRootProps({ className: 'dropzone' })}
            size="small"
            sx={{ ml: 2, mr: 1 }}
          >
            <AddPhotoAlternateIcon width={24} height={24} />
          </IconButton>

          <IconButton {...getRootProps({ className: 'dropzone' })} size="small">
            <AttachFileIcon width={24} height={24} />
          </IconButton>
        </Box>
      </RootStyle>
    </Portal>
  );
}
export default MailCompose;
