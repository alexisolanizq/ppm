import React from 'react';
import { useDropzone } from 'react-dropzone';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { CHOOSE_FILE, DROP_FILE, UPLOADING } from '@Const/const';
import { TextSnippet } from '@mui/icons-material';

const DropzoneBox = ({ onDropAccepted, onDropRejected }) => {
  const maxSize = 1000000;
  const accept = {
    'image/jpeg': [],
    'image/png': []
  };
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({ onDropAccepted, onDropRejected, maxSize, accept });

  const archivos = acceptedFiles.map((archivo) => (
    <div
      key={archivo.lastModified}
      className="bg-white d-flex p-3 mb-4 shadow-sm rounded border"
    >
      <TextSnippet fontSize='small' sx={{color: '#707070'}} />
      <p className="fw-bold text-secondary ms-2">{archivo.path}</p>
    </div>
  ));

  return (
    <div className='d-flex'>
      <div
        {...getRootProps({ className: 'dropzone' })}
        className="w-fit h-200 mb-3"
      >
        <input className="h-100 " {...getInputProps()} />
        <div
          className="text-center h-160 w-100 d-flex border-dashed rounded primary-gray-bg border-secondary-gray align-items-center justify-content-center"        
        >
          <UploadFileIcon />
          {isDragActive ? (
            <p>{DROP_FILE}</p>
          ) : (
            <p className='lh-1'>
              Arrastrar archivo <br /> para subir
            </p>
          )}
        </div>
        <button
          variant="contained"
          type="button"
          className="btn bg-primary-green text-white px-3 mt-2"
        >
          {CHOOSE_FILE}
        </button>
      </div>
      {acceptedFiles.length > 0 && (
        <div className="mt-10 w-50">
          <p className="fw-bold text-secondary ms-4 mb-3">{UPLOADING}</p>
          <ul>{archivos}</ul>
        </div>
      )}
    </div>
  );
};

export default DropzoneBox;
