import React from 'react';

import TreeView from '@mui/lab/TreeView';

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import Button from '@Component/common/button/Button';
import FilterSearch from '@Component/common/filter/FilterSearch';

import useTreeViewComponent from '@Hooks/component/useTreeViewComponent';

const TreeViewComponent = ({ data = null, onAction = () => {} }) => {
  const {
    selected,
    handleSelect,
    renderVariables,
    onSearch,
    actionClickButton
  } = useTreeViewComponent({ data, onAction });

  return (
    <>
      <FilterSearch onSearch={onSearch} />
      <TreeView
        className="variablesTreeView"
        aria-label="rich object"
        defaultExpanded={['root']}
        defaultCollapseIcon={<ArrowDropDownIcon />}
        defaultExpandIcon={<ArrowRightIcon />}
        selected={selected}
        onNodeSelect={handleSelect}
        // multiSelect
      >
        {renderVariables()}
      </TreeView>
      <Button onClick={actionClickButton}>Agregar</Button>
    </>
  );
};

export default TreeViewComponent;
