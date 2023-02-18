import Form from '@Component/common/Form/Form';
import React from 'react';

export default {
  title: 'Form',
  component: Form,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  },
  argTypes: { onSubmit: { action: 'onSubmit' } },
  args: {
    className: ''
  }
};

const Template = (args) => <Form {...args}>Soy un formulario</Form>;
export const Normal = Template.bind({});
Normal.args = {
  isLoading: false,
}

export const Cargando = Template.bind({});
Cargando.args = {
  isLoading: true,
}