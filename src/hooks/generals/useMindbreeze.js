import { styled, TableCell, tableCellClasses, TableRow } from '@mui/material';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import imgPath from '@Assets/images/ppm-logo-verde.svg';
import { fetchMindbreeze } from '@Redux/generals/mindbreezeSlice';

import { 
  MESSAGE_LIMIT_FILE
 } from '@Const/const';

const useMindbreeze = () => {
  const dispatch = useDispatch();
  const { reset, control, handleSubmit } = useForm();
  const [files, setFiles] = useState([]);
  const [mindbreezeList, setMindbreezeList] = useState([]);
  const [mindBreeze, setMindbreeze] = useState({});
  const [mindbreezeModalShow, setMindbreezeModalShow] = useState(true);
  const [alertMessage, setAlertMessage] = useState('');

  const clients = [
    { id: 1, label: 'Alejandro Sánchez' },
    { id: 2, label: 'Almeraz y Asociados A. C' }
  ];

  const getMindbreezeList = async () => {
    const response = await dispatch(fetchMindbreeze());
    setMindbreezeList(response.data);
  };

  const handleClose = () => {
    setMindbreezeModalShow(false);
    reset();
  };

  const onDropRejected = () => {
    setAlertMessage(
      MESSAGE_LIMIT_FILE
    );
  };

  const onDropAccepted = useCallback(async (acceptedFiles) => {
    setFiles(
      acceptedFiles.map((item) => ({
        preview: URL.createObjectURL(item)
      }))
    );
  }, []);


  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#f0f0f0',
      color: '#333'
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14
    }
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0
    }
  }));

  return {
    StyledTableCell,
    StyledTableRow,
    files,
    control,
    imgPath,
    clients,
    mindBreeze,
    handleClose,
    alertMessage,
    handleSubmit,
    setMindbreeze,
    onDropRejected,
    onDropAccepted,
    mindbreezeList,
    getMindbreezeList,
    mindbreezeModalShow
  };
};

export default useMindbreeze;
