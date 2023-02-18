import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import AlertMessage from '../stripedDataGrid/AlertMessage';

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

const CustomToolBar = ({
  children,
  title,
  isLink,
  linkTo,
  onShow,
  allData,
  setRowsDataList,
  alertMessage,
  setAlertMessage
}) => {
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchText, setSearchText] = useState('');

  const escapeRegExp = (value) =>
    value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    if (searchValue !== '') {
      const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
      const filteredRows = allData.filter((row) =>
        Object.keys(row).some((field) =>
          searchRegex.test(row[field].toString())
        )
      );
      setRowsDataList(filteredRows);
    } else {
      setRowsDataList(allData);
    }
  };

  const toggleSearchButton = () => {
    setActiveSearch(!activeSearch);
    requestSearch('');
  };

  return (
    <>
      {alertMessage ? (
        <AlertMessage
          alertMessage={alertMessage}
          setAlertMessage={setAlertMessage}
        />
      ) : null}
      <div className="d-flex justify-content-between align-items-center pt-1 px-3 border-bottom">
        <div>{children}</div>
        <h4 className="green-title m-0 fw-bold fs-8">{title}</h4>
        <div>
          <Button onClick={toggleSearchButton} className="ToolBarSearchButton">
            <FontAwesomeIcon icon={faSearch} className="iconToolbar" />
          </Button>
          {isLink ? (
            <Button className="ToolBarAddButton">
              <Link to={linkTo}>
                <FontAwesomeIcon
                  icon={faPlusCircle}
                  className="iconGreenToolbar"
                />
              </Link>
            </Button>
          ) : (
            <Button className="ToolBarAddButton" onClick={onShow}>
              <FontAwesomeIcon
                icon={faPlusCircle}
                className="iconGreenToolbar"
              />
            </Button>
          )}
        </div>
      </div>
      <Box className="flex-grow-1">
        {activeSearch && (
          <Grid item xs={12}>
            <Search>
              {searchText === '' ? (
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
              ) : (
                <SearchIconWrapperButton onClick={() => requestSearch('')}>
                  <HighlightOffIcon />
                </SearchIconWrapperButton>
              )}
              <StyledInputBase
                value={searchText}
                onChange={(event) => requestSearch(event.target.value)}
                inputRef={(input) => input && input.focus()}
                placeholder="Buscar"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Grid>
        )}
      </Box>
    </>
  );
};

export default CustomToolBar;
