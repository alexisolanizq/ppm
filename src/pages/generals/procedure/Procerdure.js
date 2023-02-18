import React, { useEffect } from 'react';
import {
  Box,
  MenuItem,
  Tab,
  Tabs,
  FormControl,
  Select
} from '@mui/material';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import { useParams } from 'react-router';
import useProcedure from '@Hooks/generals/useProcedure';
import Information from './inventors/Information';
import Inventors from './inventors/Inventors';
import ProcedureFamily from './inventors/ProcedureFamily';
import Attached from './inventors/Attached';
import ProcedureSidebar from './ProcedureSidebar';

const Procerdure = () => {
  const { procedureId } = useParams();
  const {
    Procedure,
    alertMessage,
    selectedTab,
    InventorsList,
    rowsDataGrid,
    handleChange,
    getProcedure,
    setSelectedTab,
    handleShow,
    setRowsDataGrid,
    setAlertMessage,
    setProcedureId
  } = useProcedure();
  useEffect(() => {
    setProcedureId(procedureId);
    getProcedure(procedureId);
  }, []);

  return (
    <Box className="d-flex flex-row h-100">
      <ProcedureSidebar />
      <Box className="d-flex flex-column my-3 mx-3 w-100">
        <div className="d-flex align-items-center">
          <h3 className="green-color fs-5 fw-bold my-3 me-4">
            {Procedure && Procedure.procReference}
          </h3>
          <FormControl variant="standard" size="small">
            <Select
              varian="filled"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedTab}
              className="mb-3"
              onChange={setSelectedTab}
            >
              <MenuItem value={0}>
                <Brightness1Icon className="mr-1 red-color" />
                Inactivo
              </MenuItem>
              <MenuItem value={2}>
                <Brightness1Icon className="mr-1 orange-color" />
                Suspenso
              </MenuItem>
              <MenuItem value={1}>
                <Brightness1Icon className="mr-1 green-color" />
                Activo
              </MenuItem>
            </Select>
          </FormControl>
        </div>

        <p className="text-uppercase fw-bold">{Procedure && Procedure.name}</p>

        <Box className="w-100 mt-05">
          <Tabs
            onChange={handleChange}
            value={selectedTab}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="Botones de navegación"
          >
            <Tab
              className="fw-semibold text-capitalize"
              label="Información"
              value={0}
            />
            <Tab
              className="fw-semibold text-capitalize"
              label="Inventores"
              value={1}
            />
            <Tab
              className="fw-semibold text-capitalize"
              label="Familia de trámite"
              value={2}
            />
          </Tabs>
        </Box>
        {selectedTab === 0 && <Information data={Procedure} />}
        {selectedTab === 1 && (
          <Inventors
            alertMessage={alertMessage}
            rowsDataGrid={rowsDataGrid}
            InventorsList={InventorsList}
            handleShow={handleShow}
            setRowsDataGrid={setRowsDataGrid}
            setAlertMessage={setAlertMessage}
          />
        )}
        {selectedTab === 2 && <ProcedureFamily data={Procedure} />}
        {selectedTab === 3 && <Attached data={Procedure} />}
      </Box>
    </Box>
  );
};

export default Procerdure;
