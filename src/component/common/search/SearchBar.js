import React from 'react';
import { Paper, IconButton, InputBase, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({ handleFindList, findList }) {
  return (
    <Paper
      component="form"
      className='p-05 d-flex align-items-center m-3 w-400'
    >
      <InputBase
        className='ml-07 flex-custom-1'
        placeholder="Buscar"
        onChange={handleFindList}
        inputProps={{ 'aria-label': 'buscar' }}
      />
      <IconButton
        className='p-07'
        aria-label="search"
        onClick={() => findList()}
      >
        <SearchIcon />
      </IconButton>
      <Divider orientation="vertical" />
    </Paper>
  )
}
