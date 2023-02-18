import TableGeneral from '@Component/common/table/TableGenerals';
import TitleValue from '@Component/common/text/TitleValue';
import useImpiPaymentsInvoicing from '@Hooks/generals/useImpiPaymentsInvoicing';
import React from 'react';

const ImpiPaymentsInvoicing = () => {
  const { headers } = useImpiPaymentsInvoicing();
  return (
    <>
      <TitleValue isBlack title="PANREF:">
        P184281MX
      </TitleValue>
      <TitleValue isBlack title="Número de solicitud:">
        MX/a/2019/012189
      </TitleValue>
      <TitleValue isBlack title="Cliente:">
        Cliente bla bla bla
      </TitleValue>
      <TitleValue isBlack title="Titular:">
        RECRUIM IP HOLDINGS
      </TitleValue>
      <TableGeneral onAdd={() => {}} headers={headers} />
    </>
  );
};

export default ImpiPaymentsInvoicing;
