import React, { useState } from 'react';

import TreeItem from '@mui/lab/TreeItem';

const useTreeViewComponent = ({ data = null, onAction = () => {} }) => {
  const [stateData, setStateData] = useState(data);
  const [selected, setSelected] = useState([]);

  const renderTree = (nodes) => {
    if (Array.isArray(nodes)) {
      return nodes.map((node) => renderTree(node));
    }

    return (
      <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
        {Array.isArray(nodes.children)
          ? nodes.children.map((node) => renderTree(node))
          : null}
      </TreeItem>
    );
  };

  const renderVariables = () => {
    if (!stateData) return '';

    return renderTree(stateData);
  };

  const handleSelect = (event, nodeIds) => {
    console.log('🚀 ~ handleSelect ~ _event', event);
    console.log('🚀 ~ handleSelect ~ nodeIds', nodeIds);
    setSelected(event.target.innerText);
  };

  const actionClickButton = () => {
    onAction(selected);
  };

  const searchValue = (item, value) => {
    const childrens = item.children.filter((children) =>
      children.name.includes(value)
    );

    return { ...item, children: childrens };
  };

  const onSearch = (value) => {
    if (value === '') {
      setStateData(data);
      return;
    }

    const itemsToDisplay = data.map((item) => {
      if (Array.isArray(item?.children)) {
        return searchValue(item, value);
      }

      return item;
    });

    setStateData(itemsToDisplay);
  };

  return {
    selected,
    handleSelect,
    renderVariables,
    onSearch,
    actionClickButton
  };
};

export default useTreeViewComponent;
