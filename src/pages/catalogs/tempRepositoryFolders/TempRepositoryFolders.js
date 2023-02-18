import React from 'react';

import Modal from '@Component/common/modal/Modal';
import GeneralLayout from '@Component/layout/GeneralLayout';
import TableDataGrid from '@Component/common/table/TableDataGrid';

import {
  CREATE_TEMP_REPOSITORY_FOLDER,
  UPDATE_TEMP_REPOSITORY_FOLDER,
  PAGE_TITLE_TEMP_REPOSITORY_FOLDERS
} from '@Const/catalogs';
import { filterStatus, sorting } from '@Const/filter';

import { isValid } from '@Utils/values';

import useTempRepositoryFolders from '@Hooks/catalogs/useTempRepositoryFolders';

import TempRepositoryFoldersForm from './TempRepositoryFoldersForm';

const TempRepositoryFolders = () => {
  const {
    prevLinks,
    isLoading,
    columns,
    actions,
    tempRepositoryFolders,
    isOpen,
    onCancel,
    row
  } = useTempRepositoryFolders();

  return (
    <>
      <GeneralLayout
        title={PAGE_TITLE_TEMP_REPOSITORY_FOLDERS}
        prevLinks={prevLinks}
      >
        <TableDataGrid
          isLoading={isLoading}
          columns={columns}
          data={tempRepositoryFolders}
          rowId="tmrfId"
          sorting={sorting('tmrfName')}
          filter={filterStatus('tmrfStatus')}
          actions={actions}
        />
      </GeneralLayout>
      <Modal
        isShow={isOpen}
        onClose={onCancel}
        title={
          isValid(row)
            ? UPDATE_TEMP_REPOSITORY_FOLDER
            : CREATE_TEMP_REPOSITORY_FOLDER
        }
      >
        <TempRepositoryFoldersForm
          row={row}
          onEnd={onCancel}
          onCancel={onCancel}
          isUpdate={isValid(row)}
        />
      </Modal>
    </>
  );
};

export default TempRepositoryFolders;
