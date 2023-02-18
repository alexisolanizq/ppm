import React from 'react';
import LinkSeeMore from '@Component/common/Link/LinkSeeMore';

export default {
  title: 'LinkSeeMore',
  component: LinkSeeMore,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <LinkSeeMore {...args} />;
export const Todo = Template.bind({});
Todo.args = {
  to: '/general'
}