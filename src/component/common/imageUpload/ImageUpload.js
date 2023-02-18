import React, { useRef, useState } from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import '@Assets/styles/uploadFile.css'
import TextError from '../text/TextError';
import IconElement from '../icon/IconElement';
import ImageApi from '../image/ImageApi';

const ImageUpload = ({
  onChange = () => {},
  value = null,
  limitSize = 1024000,
  className = '',
  source,
  idSource
}) => {
  const fileInput = useRef(null);
  const [file, setFile] = useState(value);
  const [error, setError] = useState(null);

  const handleFileInput = ({ target }) => {
    const image = target.files[0];
    
    if (image.size > limitSize) {
      setError(`El archivo pesa más de ${(limitSize / 1000).toFixed(2)} Mb`);
    } else {
      setError(null)
      setFile(URL.createObjectURL(image));
      onChange(image);
    }
  };

  return (
    <>
      <div className={`uploadFile ${className}`}>
        <div className="uploadFile__image">
          {file ? (
            
            <img src={file} alt="Perfil" />
          ) : (
            <ImageApi
              source={source}
              width={30}
              height={30}
              id={idSource}
            />
          )}
        </div>
        <div className='uploadFile__camera'>
          <IconElement icon={CameraAltIcon} color='gray-fourth'/>
        </div>
        <input ref={fileInput} type="file" onChange={handleFileInput} />
      </div>
      {error && <TextError message={error} />}
    </>
  );
};

export default ImageUpload;
