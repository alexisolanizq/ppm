import React from 'react';
import {
  List,
  ListSubheader,
  ListItemButton,
  ListItemText,
  Divider,
  Collapse
} from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import Text from '@Component/common/text/Text';
import DivWidth from '@Component/common/div/DivWidth';

const ProcedureSidebar = () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <DivWidth px={240}>
      <List
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            <Text isBold isPrimary>
              MENÚ TRÁMITE
            </Text>
          </ListSubheader>
        }
        orientation="vertical"
        variant="scrollable"
        className="list-custom-1"
      >
        <Divider />
        <ListItemButton className="fw-bold" onClick={handleClick}>
          {open ? <ExpandMore /> : <ExpandLess />}
          <ListItemText primary="Registrar" />
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding className="pl-07">
            <ListItemButton className="pl-3">
              <ListItemText primary="Id de PASE" />
            </ListItemButton>
            <ListItemButton className="pl-3">
              <ListItemText primary="Número de solicitud" />
            </ListItemButton>
            <ListItemButton className="pl-3">
              <ListItemText primary="Instrucciones" />
            </ListItemButton>
            <ListItemButton className="pl-3">
              <ListItemText primary="Documentos" />
            </ListItemButton>
            <ListItemButton className="pl-3">
              <ListItemText primary="Número de patente" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton className="fw-bold">
          <ListItemText primary="Generar Pago" />
        </ListItemButton>
        <ListItemButton className="fw-bold">
          <ListItemText primary="Generar factura" />
        </ListItemButton>
        <ListItemButton className="fw-bold">
          <ListItemText primary="Generar prefactura" />
        </ListItemButton>
        <ListItemButton className="fw-bold">
          <ListItemText primary="Registrar factura proveedor" />
        </ListItemButton>
        <ListItemButton className="fw-bold">
          <ListItemText primary="Registrar nota de remisión" />
        </ListItemButton>
      </List>
    </DivWidth>
  );
};

export default ProcedureSidebar;
