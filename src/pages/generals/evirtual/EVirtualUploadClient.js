import React from 'react';

import GeneralLayout from '@Component/layout/GeneralLayout';
import TableCustom from '@Component/common/table/TableCustom';

import { UPLOAD_EVIRTUAL } from '@Const/generals';

import useEVirtualUploadClient from '@Hooks/generals/useEVirtualUploadClient';
import ButtonAddFiles from './ButtonAddFiles';

const EVirtualUploadClient = () => {
  const { isLoading, prevLinks, headers, columns, files, addFiles } =
    useEVirtualUploadClient();

  return (
    <GeneralLayout
      title={UPLOAD_EVIRTUAL}
      prevLinks={prevLinks}
      isLoading={isLoading}
    >
      <TableCustom list={files} headers={headers} columns={columns}>
        <ButtonAddFiles addFiles={addFiles} />
      </TableCustom>
    </GeneralLayout>
  );
};

export default EVirtualUploadClient;
