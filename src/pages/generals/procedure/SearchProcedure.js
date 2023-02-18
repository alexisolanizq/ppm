import React, { useEffect } from 'react';
import { Paper, Container, Grid, Box, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { CardProcedure } from '@Component/common/card';
import { SearchBar } from '@Component/common/search';
import useProcedure from '@Hooks/generals/useProcedure';

const Card = styled(Paper)(() => ({
  width: '100%'
}));

const SearchProcedure = () => {
  const {
    procedureDataFiltered,
    Procedures,
    findData,
    initSearch,
    handleFindList
  } = useProcedure();
  useEffect(() => {
    initSearch();
  }, []);
  return (
    <Container>
      <Card className="m-3 p-3 d-flex flex-column aling-items-center">
        <Box className='flex-grow-1 mb-3'>
          <p>Buscar tramite</p>
        </Box>
        <SearchBar handleFindList={handleFindList} />
        <Divider flexItem className='m-3' />
        <Box className="flex-grow-1">
          <Grid container spacing={2}>
            {findData.length === 0 &&
              Procedures.map((item) => <CardProcedure procedure={item} />)}
            {Procedures &&
              findData.length > 0 &&
              (procedureDataFiltered.length > 0 ? (
                procedureDataFiltered.map((item) => (
                  <CardProcedure procedure={item} />
                ))
              ) : (
                <p>kmlkm</p>
              ))}
          </Grid>
        </Box>
      </Card>
    </Container>
  );
};

export default SearchProcedure;
