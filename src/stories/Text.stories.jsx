import React from 'react';
import Text from '@Component/common/text/Text';

export default {
  title: 'Text',
  component: Text,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Text {...args} />;

export const Todo = Template.bind({});
Todo.args = {
  children: 'Texto',
  isPrimary: false,
  isPrimaryText: false,
  isGray: false,
  isBold: false,
  isRegular: false,
  isSpan: false
}

export const Primario = Template.bind({});
Primario.args = {
  children: 'Soy de color primario',
  isPrimary: true
};

export const PrimarioText = Template.bind({});
PrimarioText.args = {
  children: 'Soy de color primario text',
  isPrimaryText: true,
};

export const Gris = Template.bind({});
Gris.args = {
  children: 'Soy de color gris',
  isGray: true
};

export const Bold = Template.bind({});
Bold.args = {
  children: 'Soy bold',
  isBold: true
};

export const Regular = Template.bind({});
Regular.args = {
  children: 'Soy de fuente regular',
  isRegular: true
};

export const Big = Template.bind({});
Big.args = {
  children: 'Soy de fuente grande',
  isBig: true
};

export const Span = Template.bind({});
Span.args = {
  children: 'Soy una etiqueta <span>',
  isSpan: true
};