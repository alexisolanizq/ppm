import TextError from '@Component/common/text/TextError'
import useImpiPaymentsPanref from '@Hooks/generals/useImpiPaymentsPanref'
import { TextField } from '@mui/material'
import React from 'react'

const ImpiPaymentsPanref = ({ onChange, panrefDefault, error }) => {
  const {procedureHolder, onKeyDown} = useImpiPaymentsPanref({ onChange, panrefDefault })
  const {isSuccess, isError, isLoading, data,} = procedureHolder
  return (
    <>
      <TextField 
        label="* PANREF"
        defaultValue={panrefDefault}
        onKeyDown={onKeyDown}
        />
      {isLoading && <p>Cargando...</p>}
      {isSuccess && !isError && (
        <div>
          <p className='mb-1'>
            <b>Cliente:</b> KNOBBE OLSON & BEAR LLP (SD)
          </p>
          <p>
            <b>Titular:</b> {`${data[0].holder.holFirstName} ${data[0].holder.holLastName}`}
          </p>
        </div>
      )}
      {isError && <TextError message="No se encontró el PANREF" />}
      {error && <TextError message={error.message} />}
    </>
   
  )
}

export default ImpiPaymentsPanref