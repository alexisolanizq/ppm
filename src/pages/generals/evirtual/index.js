import React from 'react';
import { useParams } from 'react-router';
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  Box,
  TableContainer,
  Paper,
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Divider,
  IconButton,
  TextField
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { LINK_CLIENT } from '@Const/links';
import useUploadEvirtual from '@Hooks/generals/useUploadEvirtual';
import HeaderBreadcrumbs from '@Component/common/breadcrumb/HeaderBreadcrumbs';

const Index = () => {
  const {
    getRootProps,
    getInputProps,
    save,
    files,
    remove,
    handleFormData
  } = useUploadEvirtual();
  const { clientId, officeName } = useParams();
  return (
    <Box sx={{ padding: '2.5rem' }}>
      <Box>
        <HeaderBreadcrumbs
          heading="Profile"
          links={[
            {
              name: 'Clientes',
              href: LINK_CLIENT
            },
            { name: officeName }
          ]}
          sx={{ marginBottom: 0, width: 'inherit', minWidth: 'fit-content' }}
        />
      </Box>
      <Divider
        flexItem
        sx={{
          width: '100%px!important',
          my: '1rem'
        }}
      />
      <TableContainer component={Paper} className="border-custom-2">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'relative',
            alignItems: 'center'
          }}
        >
          <div {...getRootProps({ className: 'dropzone' })} className="w-fit">
            <input className="h-100 " {...getInputProps()} />
            <Button
              sx={{ background: '#5cbd9c', color: '#fff', margin: '0.7rem' }}
              variant="outlined"
            >
              <FolderOpenIcon sx={{ color: '#fff' }} />
              Agregar archivos
            </Button>
          </div>
        </Box>
        <Table className="border-custom-2" aria-label="simple table">
          <TableHead className="border-custom-2">
            <TableRow>
              <TableCell sx={{ width: '25%', textAlign: 'center' }}>
                Archivo
              </TableCell>
              <TableCell sx={{ width: '25%', textAlign: 'center' }}>
                Etiqueta
              </TableCell>
              <TableCell sx={{ width: '25%', textAlign: 'center' }}>
                Sub-etiqueta
              </TableCell>
              <TableCell sx={{ width: '25%', textAlign: 'center' }}>
                Nombre del archivo
              </TableCell>
              <TableCell sx={{ width: '60px' }} />
            </TableRow>
          </TableHead>
          <TableBody>
            {files.map((row, index) => (
              <TableRow key={row.path}>
                <TableCell>{row.path}</TableCell>
                <TableCell>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Etiqueta
                    </InputLabel>
                    <Select
                      varian="filled"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Plazo"
                      onChange={handleFormData(index, 'label')}
                    >
                      <MenuItem value="etiqueta 1">etiqueta1</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Sub-etiqueta
                    </InputLabel>
                    <Select
                      varian="filled"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Plazo"
                      onChange={handleFormData(index, 'sublabel')}
                    >
                      <MenuItem value="etiqueta 1">subetiqueta 1</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell>
                  <TextField
                    id="impiDocument-name"
                    label="Nombre del archivo"
                    variant="outlined"
                    sx={{
                      display: 'flex',
                      flexWrap: 'nowrap'
                    }}
                    onChange={handleFormData(index, 'nameFile')}
                  />
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    aria-label="Modificar"
                    onClick={() => {
                      remove(index);
                    }}
                  >
                    <ClearIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}
      >
        <Button variant="contained" className="mr-05">
          Cancelar
        </Button>
        <Button
          variant="contained"
          onClick={() => save(clientId)}
          sx={{ marginLeft: '0.5rem' }}
        >
          Guardar
        </Button>
      </Box>
    </Box>
  );
};

export default Index;
