import { useState } from 'react'

export const ImpiPaymentsTotalAmountHeaders = ['Nombre de usuario', 'Tipo de pago', 'Monto total']

export const ImpiPaymentsTotalAmountColumns = [
  {
    field: 'direccion',
    render: () => 'Andrés Esteva'
  },
  {
    field: 'tipopago',
    render: () => 'Físico'
  },
  {
    field: 'montotoal',
    render: () => '$10,499'
  }
]

const useImpiPaymentsTotalAmount = () => {
  const [dateConsult, setDateConsult] = useState(null) 

  return {
    dateConsult,
    setDateConsult
  }
}

export default useImpiPaymentsTotalAmount