import React from 'react';
import SearchList from '@Component/common/search/SearchList';

export default {
  title: 'SearchList',
  component: SearchList,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: { onSearch: { action: 'onSearch' } },
};

const Template = (args) => <SearchList {...args} />;

export const SearchListEjemplo = Template.bind({});