import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  fetchProcedures,
  fetchProcedure,
  fetchProcedureRequest,
  fetchProcedureRenewals
} from '@Redux/generals/procedureSlice';

const useProcedure = () => {
  const dispatch = useDispatch();
  const { procedureParam } = useParams();
  const Procedures = useSelector(({ procedure }) => procedure.procedures);
  const Procedure = useSelector(({ procedure }) => procedure.procedure);
  const InventorsList = useSelector(({ procedure }) => procedure.inventors);
  const ProcedureRenewals = useSelector(
    ({ procedure }) => procedure.procedureRenewals
  );
  const [proceduresDataFiltered, setClientsDataFiltered] = useState([]);
  const [rowsDataGrid, setRowsDataGrid] = useState([]);
  const [inventorsListData, setInventorsListData] = useState([]);
  const [findData, setFindData] = useState('');
  const [procedureId, setProcedureId] = useState(null);
  const [selectedTab, setSelectedTab] = useState(0);
  const [alertMessage, setAlertMessage] = useState({});
  const [modalShow, setmodalShow] = useState(true);
  const handleShow = () => setmodalShow(true);
  const [openPopover, setOpenPopover] = useState(null);
  const handlePopover = (event) => {
    setOpenPopover(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setOpenPopover(null);
  };
  const open = Boolean(openPopover);
  const popoverId = open ? 'simple-popover' : undefined;
  const initSearch = () => {
    dispatch(fetchProcedures());
  };
  const handleFindList = (e) => {
    setFindData(e.target.value);
    const result = Procedures.filter((procedure) =>
      procedure.name.includes(e.target.value)
    );
    setClientsDataFiltered(result);
  };
  const getProcedure = (e) => {
    dispatch(fetchProcedure(e));
    setInventorsListData([]);
  };
  const getProcedureRenewalById = (id) => {
    dispatch(fetchProcedureRenewals(id));
  };
  const handleChange = async (event, newValue) => {
    setSelectedTab(newValue);
    if (newValue === 2 && !InventorsList) {
      const response = await dispatch(fetchProcedureRequest(procedureId));
      setRowsDataGrid(response);
    }
  };
  const menuItems = [
    {
      name: 'Registrar',
      subItems: [
        {
          action: () => {
            console.log('success');
          },
          name: 'Id de PASE'
        },
        {
          action: () => {
            console.log('second success');
          },
          name: 'Número de solicitud'
        },
        {
          action: () => {
            console.log('third success');
          },
          name: 'Instrucciones'
        },
        {
          action: () => {},
          name: 'Documentos'
        },
        {
          action: () => {},
          name: 'Número de patente'
        }
      ]
    },
    {
      name: 'Generar Pago'
    },
    {
      name: 'Generar factura'
    },
    {
      name: 'Generar prefactura'
    }
  ];
  return {
    Procedures,
    Procedure,
    proceduresDataFiltered,
    findData,
    selectedTab,
    alertMessage,
    modalShow,
    rowsDataGrid,
    inventorsListData,
    InventorsList,
    initSearch,
    handleShow,
    setProcedureId,
    setRowsDataGrid,
    setAlertMessage,
    setSelectedTab,
    handleFindList,
    handleChange,
    getProcedure,
    getProcedureRenewalById,
    procedureParam,
    ProcedureRenewals,
    menuItems,

    handlePopoverClose,
    handlePopover,
    openPopover,
    open,
    popoverId
  };
};

export const sidebarProcedure = [{ text: '', to: '' }];

export default useProcedure;
