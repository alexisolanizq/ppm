import React from 'react';
import { FormHelperText } from '@mui/material';
import { Spinner } from 'react-bootstrap';
import useImpiPaymentsArticles from '@Hooks/generals/useImpiPaymentsArticles';
import '@Assets/styles/impiarticles.css';
import TableGeneral from '@Component/common/table/TableGenerals';

export default function ImpiPaymentsArticles({ onChange, value = [], error }) {
  const {
    articles,
    isLoading,
    onAddArticle,
    headers,
    columns
  } = useImpiPaymentsArticles({ onChange, value });

  if (isLoading) return <Spinner />;

  return (
    <>
      <TableGeneral
        list={articles}
        columns={columns}
        onAdd={onAddArticle}
        headers={headers}
      />
      {error && (
        <FormHelperText className="Mui-error">{error.message}</FormHelperText>
      )}
    </>
  );
}