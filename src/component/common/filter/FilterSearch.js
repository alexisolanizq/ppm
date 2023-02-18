import React, { useState } from 'react';
import { Close, Search } from '@mui/icons-material';
import { Input } from '@mui/material';

import Icon from '@Component/common/icon/Icon';
import { VALUE_EVENT_ENTER } from '@Const/const';

const FilterSearch = ({ onSearch = () => {}, isChange = false }) => {
  const [value, setValue] = useState('');

  const handleOnChange = ({ target }) => {
    setValue(target.value);
  };

  const handleOnKeyDown = (event) => {
    if (isChange) {
      onSearch(event.target.value);
    } else if (event.key === VALUE_EVENT_ENTER) {
      event.preventDefault();
      onSearch(event.target.value);
    }
  };

  const [activeFilter, setActiveFilter] = useState(false);

  const toggleSearchButton = () => {
    setActiveFilter(!activeFilter);
  };

  const onClear = () => {
    setActiveFilter(false);
    onSearch('');
    setValue('');
  };

  return (
    <div>
      {!activeFilter ? (
        <Icon
          icon={Search}
          onClick={toggleSearchButton}
          className="GridToolbarColumnsButtonCustom"
        />
      ) : (
        <Icon
          icon={Close}
          onClick={onClear}
          className="GridToolbarColumnsButtonCustom"
        />
      )}

      {activeFilter && (
        <Input
          color="success"
          id="filter-search-adornment"
          defaultValue={value}
          onChange={handleOnChange}
          onKeyUp={handleOnKeyDown}
          placeholder="Buscar..."
        />
      )}
    </div>
  );
};

export default FilterSearch;
