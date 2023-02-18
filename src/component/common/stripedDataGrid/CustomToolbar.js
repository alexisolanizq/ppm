import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport
} from '@mui/x-data-grid';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import Button from '@mui/material/Button';
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

const Search = styled('div')(() => ({
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  border: `1px solid grey`,
  borderRadius: '8px',
  marginTop: '1rem',
  marginBottom: '1rem',
  marginRight: '1.5rem',
  marginLeft: '1.5rem',
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
    width: '100%'
  }
}));

export const CustomToolbar = ({
  title,
  value,
  onChange,
  clearSearch,
  onShow,
  toExport
}) => {
  const [activeSearch, setActiveSearch] = useState(false);

  const toggleSearchButton = () => {
    setActiveSearch(!activeSearch);
    clearSearch();
  };

  return (
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
              {title}
            </div>
          </Grid>
          <Grid item xs={3} container justifyContent="flex-end">
            <Button
              onClick={toggleSearchButton}
              className="ToolBarSearchButton"
            >
              <FontAwesomeIcon icon={faSearch} className="iconToolbar" />
            </Button>
            <GridToolbarFilterButton
              className="noLabel ToolBarFilterButton"
              startIcon={
                <FontAwesomeIcon icon={faFilter} className="iconToolbar" />
              }
            />
            <Button className="ToolBarAddButton" onClick={onShow()}>
              <FontAwesomeIcon
                icon={faPlusCircle}
                className="iconGreenToolbar"
              />
            </Button>
            {toExport && (
              <GridToolbarExport
                className="noLabel"
                startIcon={<FileDownloadRoundedIcon className="iconToolbar" />}
              />
            )}
          </Grid>
        </Grid>
      </GridToolbarContainer>

      {activeSearch && (
        <Grid item xs={12}>
          <Search>
            {value === '' ? (
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
            ) : (
              <SearchIconWrapperButton onClick={clearSearch}>
                <HighlightOffIcon />
              </SearchIconWrapperButton>
            )}
            <StyledInputBase
              value={value}
              onChange={onChange}
              inputRef={(input) => input && input.focus()}
              placeholder="Buscar en la tabla"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Grid>
      )}
    </Box>
  );
};

export default CustomToolbar;
