import { CardUser } from '@Component/common/card';
import GridLayout from '@Component/common/grid/GridLayout';
import GeneralLayout from '@Component/layout/GeneralLayout';
import { PAGE_TITLE_USERS } from '@Const/catalogs';
import { PREVLINK_CATALOG } from '@Const/links';
import useUsers from '@Hooks/catalogs/useUsers';
import React from 'react';

const Users = () => {
  const { usersFilters, isLoading, actions } = useUsers();

  return (
    <GeneralLayout
      isTitleFlex
      title={PAGE_TITLE_USERS}
      prevLinks={PREVLINK_CATALOG}
      actions={actions}
    >
      <GridLayout isLoading={isLoading} isEmpty={usersFilters.length === 0}>
        {usersFilters.map((user) => (
          <CardUser key={`card-user-${user.usrId}`} user={user} />
        ))}
      </GridLayout>
    </GeneralLayout>
  );
};

export default Users;
