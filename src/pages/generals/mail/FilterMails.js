import React, { useState } from 'react';

import { Paper, IconButton, InputBase, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
// ----------------------------------------------------------------------
export default function FilterMails({ handleFindList, findList }) {
  const [showSearch, setShowSearch] = useState(false);
  return showSearch ? (
    <Paper
      component="form"
      sx={{
        position: 'absolute',
        right: '5px',
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Buscar"
        onChange={(e) => handleFindList(e.target.value)}
        inputProps={{ 'aria-label': 'buscar' }}
      />
      <IconButton
        sx={{ p: '10px' }}
        aria-label="search"
        onClick={() => findList()}
      >
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
  ) : (
    <IconButton
      sx={{
        position: 'absolute',
        right: '5px'
      }}
      aria-label="search"
      onClick={() => setShowSearch(true)}
    >
      <SearchIcon />
    </IconButton>
  );
}
