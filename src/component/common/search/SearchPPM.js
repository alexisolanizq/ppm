import React from 'react';
import { Paper, IconButton, InputBase, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({ handleFindList, findList }) {
  return (
    <Paper component="form" className="d-flex align-items-center justify-content-between m-3 w-400" sx={{borderRadius: 0, }}>
      <InputBase
        className="ml-07 flex-custom-1"
        placeholder="Buscar"
        onChange={handleFindList}
        inputProps={{ 'aria-label': 'buscar' }}
      />
      <IconButton
        sx={{ backgroundColor: '#005953', borderRadius: 0 }}
        className="p-07 ppm-search-button"
        aria-label="search"
        onClick={() => findList()}
      >
        <SearchIcon sx={{color: "#fff"}} />
      </IconButton>
      <Divider orientation="vertical" />
    </Paper>
  );
}
