import React from 'react';
import Grid from '@Component/common/Grid/Grid';
import Card from '@Component/common/Card/Card';

export default {
  title: 'Grid',
  component: Grid,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const CardsChildren = () => <>
  <Card><Card.Body /></Card>
  <Card><Card.Body /></Card>
  <Card><Card.Body /></Card>
  <Card><Card.Body /></Card>
</>

const Template = (args) => <Grid {...args}><CardsChildren /></Grid>;
export const Todo = Template.bind({});
Todo.args = {
  repeat: 3,
  gap: 10,
  className: 'p-4',
}