import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useDropzone } from 'react-dropzone';
import { addEvirtual } from '@Redux/generals/uploadEvirtualSlice';

const useUploadEvirtual = () => {
  const dispatch = useDispatch();
  const [files, setFiles] = useState([]);

  const handleFormData = (index, prop) => (e) => {
    const updatedArray = [...files];
    updatedArray[index][prop] = e.target.value;
    setFiles(updatedArray);
  };

  const onDropAccepted = useCallback(async (acceptedFiles) => {
    setFiles((prev) => [...prev, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } =
    useDropzone({
      onDropAccepted,
      multiple: true
    });

  const save = () => {
    files.forEach((item) => {
      const formData = new FormData();
      formData.append('sourceId', 1249);
      formData.append('area', item.label);
      formData.append('tag', item.label);
      formData.append('subtag', item.sublabel);
      formData.append('filename', item.nameFile);
      formData.append('file', item);
      dispatch(addEvirtual(formData, 'Client'));
      return formData;
    });
  };
  const remove = (index) => {
    setFiles([
      ...files.slice(0, index),
      ...files.slice(index + 1, files.length)
    ]);
  };
  return {
    files,
    isDragActive,
    save,
    getRootProps,
    getInputProps,
    remove,
    handleFormData
  };
};

export default useUploadEvirtual;
