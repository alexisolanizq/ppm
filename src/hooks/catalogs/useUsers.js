import FilterComponent from '@Component/common/filter/FilterComponent';
import FilterSearch from '@Component/common/filter/FilterSearch';
import UserFilters from '@Pages/catalogs/users/UserFilters';
import { useUserListService } from '@Services/user/useUserService';
import { filterByValue } from '@Utils/array';
import { isUndefined } from '@Utils/values';
import React, { useEffect, useState } from 'react';

const useUsers = () => {
  const [usersFilters, setUsersFilters] = useState([]);
  const { data: users, isLoading } = useUserListService();

  const onSearch = (value) => {
    if (value === '') {
      setUsersFilters(users);
    } else {
      const filteredRows = filterByValue(users, value);
      setUsersFilters(filteredRows);
    }
  };

  const onFilter = ({ status, joaId }) => {
    let newUsers = [...users]

    if (!isUndefined(status)) {
      newUsers = newUsers.filter(f => f.usrStatus === status)
    }

    if (joaId) {
      newUsers = newUsers.filter(f => {
        const jobAreaMain = f.jobAreaUsers.find(fja => fja.joauMainArea)
        if (jobAreaMain) {
          return jobAreaMain.jobArea?.joaId === joaId
        }
        return false
      })
    }
    setUsersFilters(newUsers)
  };

  const onClear = () => onFilter({ status: true })

  useEffect(() => {
    if (users) {
      onClear()
    }
  }, [users]);

  const actions = [
    <FilterSearch isChange onSearch={onSearch} />,
    <FilterComponent
      onClear={onClear}
      onFilter={onFilter}
      component={<UserFilters />}
    />
  ];

  return {
    isLoading,
    actions,
    usersFilters
  };
};

export default useUsers;
