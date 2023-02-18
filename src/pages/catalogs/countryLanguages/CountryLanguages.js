import Modal from '@Component/common/modal/Modal';
import TableDataGrid from '@Component/common/table/TableDataGrid';
import GeneralLayout from '@Component/layout/GeneralLayout';
import { ADD_LANGUAGE_COUNTRY, PAGE_TITLE_LANGUAGE_COUNTRY, UPDATE_LANGUAGE_COUNTRY } from '@Const/catalogs';
import { filterStatus, sorting } from '@Const/filter';
import { PREVLINK_CATALOG } from '@Const/links';
import useCountryLanguages from '@Hooks/catalogs/useCountryLanguages';
import { isValid } from '@Utils/values';
import React from 'react';
import CountryLanguagesForm from './CountryLanguagesForm';

const CountryLanguages = () => {
  const { countryLanguages, isLoading, columns, actions, modalAdd, row, onCancel } = useCountryLanguages();
  return (
    <>
    <GeneralLayout title={PAGE_TITLE_LANGUAGE_COUNTRY} prevLinks={PREVLINK_CATALOG}>
      <TableDataGrid
        isLoading={isLoading}
        columns={columns}
        data={countryLanguages}
        rowId="clanId"
        filter={filterStatus('status')}
        sorting={sorting('country')}
        actions={actions}
      />
    </GeneralLayout>
      <Modal
        isShow={modalAdd.isOpen}
        onClose={modalAdd.closeModal}
        title={isValid(row) ? UPDATE_LANGUAGE_COUNTRY : ADD_LANGUAGE_COUNTRY}
      >             
        <CountryLanguagesForm onEnd={onCancel} isUpdate={isValid(row)} onCancel={onCancel} row={row} />
      </Modal>
    </>
  );
};

export default CountryLanguages;
