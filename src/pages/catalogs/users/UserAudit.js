import TableDataGrid from '@Component/common/table/TableDataGrid';
import useUserAudit from '@Hooks/catalogs/useUserAudit';
import React from 'react';

const UserAudit = ({ usrId }) => {
  const { data, columns, isLoading } = useUserAudit({ usrId });
  return <TableDataGrid pagination rowId='alogId' columns={columns} data={data} isLoading={isLoading} />;
};

export default UserAudit;
