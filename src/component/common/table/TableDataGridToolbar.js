import React from 'react';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import {
  GridToolbarColumnsButton,
  GridToolbarFilterButton
} from '@mui/x-data-grid';
import Flex from '../flex/Flex';
import Actions from '../actions/Actions';
import FilterSearch from '../filter/FilterSearch';

const TableDataGridToolbar = ({ actions = [], onSearch = () => {} }) => {
  const actionsEnd = [
    <FilterSearch isChange onSearch={onSearch}/>,
    <Filter />,
    ...actions
  ];

  return (
    <div className="toolbar">
      <Flex justify="between">
        <div className="toolbar__left">
          <GridToolbarColumnsButton
            className="GridToolbarColumnsButtonCustom"
            startIcon={<ViewWeekIcon />}
          />
        </div>
        <div className="toolbar__right">
          <Actions gap={8} actions={actionsEnd} />
        </div>
      </Flex>
    </div>
  );
};

const Filter = () => (
  <GridToolbarFilterButton className="GridToolbarColumnsButtonCustom" />
);

export default TableDataGridToolbar;
