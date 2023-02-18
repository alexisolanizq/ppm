import Button from '@Component/common/button/Button';
import DatePicker from '@Component/common/datePicker/DatePicker';
import TableGeneral from '@Component/common/table/TableGenerals';
import useImpiPaymentsTotalAmount, {
  ImpiPaymentsTotalAmountColumns,
  ImpiPaymentsTotalAmountHeaders
} from '@Hooks/generals/useImpiPaymentsTotalAmount';
import React from 'react';

const ImpiPaymentsTotalAmount = () => {
  const { dateConsult, setDateConsult } = useImpiPaymentsTotalAmount();

  return (
    <div className="text-center">
      <DatePicker
        label="Fecha a consultar"
        value={dateConsult}
        onChange={setDateConsult}
      />
      {dateConsult ? (
        <TableGeneral
          columns={ImpiPaymentsTotalAmountColumns}
          headers={ImpiPaymentsTotalAmountHeaders}
        />
      ) : (
        <Button isCenter>Calcular monto total</Button>
      )}
    </div>
  );
};

export default ImpiPaymentsTotalAmount;
