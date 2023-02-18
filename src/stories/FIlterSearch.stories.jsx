import FilterSearch from '@Component/common/Filter/FilterSearch';
import React from 'react';

export default {
  title: 'FilterSearch',
  component: FilterSearch,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  },
  argTypes: { onSearch: { action: 'onSearch' } }
};

const Template = (args) => <FilterSearch {...args}/>;
export const Filtro = Template.bind({});