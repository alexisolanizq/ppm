import React from 'react';
import { useDropzone } from 'react-dropzone';
import Box from '@mui/material/Box';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Dropzone = ({ onDropAccepted, onDropRejected, file }) => {
  const maxSize = 1000000;
  const accept = {
    'image/jpeg': [],
    'image/png': []
  };
  const { getRootProps, getInputProps, acceptedFiles } =
    useDropzone({ onDropAccepted, onDropRejected, maxSize, accept,  multiple: false });
  return (
    <div className='d-flex'>
      <div
        {...getRootProps({ className: 'dropzone' })}
        className="w-fit mb-3"
      >
        <input className="h-100 " {...getInputProps()} />
        <Avatar style={{width: '120px', height: '120px'}}>
        {acceptedFiles.length > 0 
          ?
            <img alt="klk" src={file && file[0].preview} width="100%" height="auto" />
          :
            <AccountCircleIcon style={{width: '100%', height: '100%'}}/>
        }
          <Box className='halfCircle'>
            <PhotoCameraIcon style={{width: '60%', height: '60%'}}/>
          </Box>
        </Avatar>
      </div>
    </div>
  );
};

export default Dropzone;
