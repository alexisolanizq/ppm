import Card from '@Component/common/Card/Card';
import DivWidth from '@Component/common/Div/DivWidth';
import React from 'react';

export default {
  title: 'DivWidth',
  component: DivWidth,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
};

const CardChildren = () => <Card><Card.Body /></Card>

const Template = (args) => <DivWidth {...args}><CardChildren /></DivWidth>;
export const Porcentaje = Template.bind({});
Porcentaje.args = {
  porcentage: 25
}

export const Pixeles = Template.bind({});
Pixeles.args = {
  px: 250
}