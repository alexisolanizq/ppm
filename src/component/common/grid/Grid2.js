import { Box, Grid } from '@mui/material';
import React from 'react';

const Grid2 = ({ children, spacing = 2, contentWidth = '100%', ...props }) => (
  <Box sx={{ flexGrow: 1, width: contentWidth }}>
    <Grid container spacing={spacing} {...props}>
      {children}
    </Grid>
  </Box>
);
const GridItem = ({ children, xs = 'auto', md, ...props }) => (
  <Grid item xs={xs} md={md} {...props}>
    {children}
  </Grid>
);
Grid2.GridItem = GridItem;

export default Grid2;
