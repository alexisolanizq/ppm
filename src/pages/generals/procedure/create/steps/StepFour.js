import React from 'react';
import {
  Grid
} from '@mui/material';
import { FormRegistrationProcessRecipients } from '@Component/common/forms';
import TableClients from './TableClients';
import TableHolders from './TableHolders';

const StepFour = ({
  clients,
  clientsData,
  invoicingEntitiesList,
  handleClients,
  removeClients,
  offices,
  addClient,
  holdersList,
  holdersData,
  handleHolders,
  removeHolders,
  addHolder,
  typeRecipent,
  handleRecipent,
  errors,
  emails,
  emailsCC,
  emailsCCO,
  setEmails,
  setEmailsCC,
  setEmailsCCO
}) => (
  <Grid container className='mt-3'>
    <TableClients
      clients={clients}
      clientsData={clientsData}
      invoicingEntitiesList={invoicingEntitiesList}
      handleClients={handleClients}
      removeClients={removeClients}
      offices={offices}
      addClient={addClient}
    />
    <TableHolders
      holdersList={holdersList}
      holdersData={holdersData}
      invoicingEntitiesList={invoicingEntitiesList}
      handleHolders={handleHolders}
      removeHolders={removeHolders}
      offices={offices}
      addHolder={addHolder}
    />
    <FormRegistrationProcessRecipients
      handleRecipent={handleRecipent}
      typeRecipent={typeRecipent}
      emails={emails}
      emailsCC={emailsCC}
      emailsCCO={emailsCCO}
      setEmails={setEmails}
      setEmailsCC={setEmailsCC}
      setEmailsCCO={setEmailsCCO}
      errors={errors}
    />
  </Grid>
);

export default StepFour;
