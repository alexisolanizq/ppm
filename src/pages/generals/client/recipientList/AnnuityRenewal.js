import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React, { useEffect } from 'react';
import { Controller } from 'react-hook-form';
import CustomBootstrapDialog from '@Component/common/bootstrapDialog/CustomBootstrapDialog';
import Client from './annuityRenewal/Client';
import Holder from './annuityRenewal/Holder';

const AnnuityRenewal = ({
  control,
  handleSubmit,
  onSubmit,
  watch,
  annuityRenewalModal,
  handleCloseListTypeModals
}) => {
  const { BootstrapDialog, BootstrapDialogTitle } = CustomBootstrapDialog();

  const clients = [
    { id: 1, label: 'Alejandro Sánchez' },
    { id: 2, label: 'Almeraz y Asociados A. C' }
  ];

  const offices = [
    { id: 1, label: 'Los Ángeles' },
    { id: 2, label: 'Los Altos' }
  ];

  const holders = [
    { id: 1, label: 'Alejandro Sánchez' },
    { id: 2, label: 'Alma Santiago' },
    { id: 3, label: 'Almeraz y Asociados A. C' }
  ];

  const clientHolderWatcher = watch('annuityRenewal');

  useEffect(() => {
    // using watcher to render component
  }, [clientHolderWatcher]);

  return (
    <BootstrapDialog
      open={annuityRenewalModal}
      onClose={handleCloseListTypeModals}
      aria-labelledby="customized-dialog-title"
      xs={{ width: '80%' }}
    >
      <BootstrapDialogTitle
        className="text-center fs-5 fw-bold"
        onClose={handleCloseListTypeModals}
      >
        Anualidad / Renovacción
      </BootstrapDialogTitle>
      <form onSubmit={handleSubmit(onSubmit())}>
        <Controller
          name="annuityRenewal"
          control={control}
          render={({ field: { onChange, value } }) => (
            <RadioGroup
              row
              defaultValue={value}
              onChange={onChange}
              aria-labelledby="annuity-renewal-radio-buttons-group-label"
              sx={{ display: 'flex', justifyContent: 'space-evenly' }}
            >
              <FormControlLabel
                value="client"
                control={<Radio color="success" />}
                label="Client"
              />
              <FormControlLabel
                value="holder"
                control={<Radio color="success" />}
                label="Títular"
              />
            </RadioGroup>
          )}
        />
      </form>
      {
        // eslint-disable-next-line no-nested-ternary
        clientHolderWatcher === 'client' ? (
          <Client
            watch={watch}
            control={control}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            clients={clients}
            offices={offices}
          />
        ) : clientHolderWatcher === 'holder' ? (
          <Holder
            control={control}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            holders={holders}
          />
        ) : null
      }
    </BootstrapDialog>
  );
};

export default AnnuityRenewal;
