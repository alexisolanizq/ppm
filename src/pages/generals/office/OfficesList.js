import { CardOffice } from '@Component/common/card';
import GridLayout from '@Component/common/grid/GridLayout';
import React from 'react';

const OfficesList = ({ offices = [] }) => (
  <GridLayout isEmpty={offices.length === 0}>
    {offices.map((office) => (
      <CardOffice key={`card-office-${office.offId}`} office={office} />
    ))}
  </GridLayout>
);

export default OfficesList;
