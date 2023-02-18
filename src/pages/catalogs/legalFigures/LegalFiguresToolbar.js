import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  gridClasses
} from '@mui/x-data-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faFilter,
  faSearch,
  faPlusCircle
} from '@fortawesome/free-solid-svg-icons';

const styleCommon = {
  padding: '1rem 1rem',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const Search = styled('div')(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  border: `1px solid ${theme.palette.grey[300]}`,
  backgroundColor: theme.palette.grey[200],
  borderRadius: theme.shape.borderRadius,
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  marginRight: theme.spacing(3),
  marginLeft: theme.spacing(3),
  flexGrow: 1,
  width: 'auto',
  '& :first-of-type': {
    flexGrow: 1
  },
  '.MuiInputBase-root': {
    width: '100%'
  }
}));

const SearchIconWrapperButton = styled(IconButton)(() => styleCommon);

const SearchIconWrapper = styled('div')(() => styleCommon);

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `0`,
    transition: theme.transitions.create('width'),
    width: '100%'
  }
}));
export const LegalFiguresDataGrid = styled(DataGrid)(({ theme }) => ({
  maxWidth: '80%',
  marginLeft: '10%',
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: theme.palette.grey[200],
    '&:hover, &.Mui-hovered': {
      backgroundColor: alpha(theme.palette.primary.main, 0.2),
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }
  }
}));

export const LegalFiguresToolbar = ({
  activeSearch,
  filter,
  setFilter,
  setIsModalOpen,
  setAction,
  toggleSearchButton,
  reset
}) => (
  <Box className="flex-grow-1">
    <GridToolbarContainer className="d-flex flex-column">
      <Grid container>
        <Grid item xs={3} container justifyContent="flex-start">
          <GridToolbarColumnsButton
            className="noLabel ToolBarColumnsButton"
            startIcon={
              <FontAwesomeIcon
                icon={faBars}
                className="rotateIcon iconToolbar"
              />
            }
          />
        </Grid>
        <Grid item xs={6} sx={{ textAlign: 'center' }}>
          <div className="green-title fs-5 fw-bold pt-3 customFont">
            Figuras legales
          </div>
        </Grid>
        <Grid item xs={3} container justifyContent="flex-end">
          <Button onClick={toggleSearchButton} className="ToolBarSearchButton">
            <FontAwesomeIcon icon={faSearch} className="iconToolbar" />
          </Button>
          <GridToolbarFilterButton
            className="noLabel ToolBarFilterButton"
            startIcon={
              <FontAwesomeIcon icon={faFilter} className="iconToolbar" />
            }
          />
          <Button
            className="ToolBarAddButton"
            onClick={() => {
              reset();
              setIsModalOpen(true);
              setAction('Dar de alta');
            }}
          >
            <FontAwesomeIcon icon={faPlusCircle} className="iconGreenToolbar" />
          </Button>
        </Grid>
      </Grid>
    </GridToolbarContainer>
    {activeSearch && (
      <Grid item xs={12}>
        <Search>
          {filter === '' ? (
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          ) : (
            <SearchIconWrapperButton onClick={() => setFilter('')}>
              <HighlightOffIcon />
            </SearchIconWrapperButton>
          )}
          <StyledInputBase
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
            placeholder="Buscar en la tabla"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </Grid>
    )}
  </Box>
);

export default LegalFiguresToolbar;
