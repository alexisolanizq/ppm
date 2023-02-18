import React from 'react';
import { Paper, Link, Grid } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

const CardProcedure = ({ procedure }) => (
  <Grid key={procedure.procId} item xs={6} md={4}>
    <Paper className="p-05 d-flex flex-column justify-content-between">
      
      <Link
        href={`/tramite/${procedure.procId}`}
        className="green-color ml-auto text-decoration-none"
      >
        <VisibilityIcon className="fs-6" /> Ver más..
      </Link>
    </Paper>
  </Grid>
);

export default CardProcedure;
