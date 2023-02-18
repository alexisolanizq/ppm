import Button from '@Component/common/button/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  },
  argTypes: { onClick: { action: 'onClick' } },
  args: {
    className: ''
  }
};

const Template = (args) => <Button {...args}>Soy un botón</Button>;
export const Submit = Template.bind({});
Submit.args = {
  isSubmit: true
}

export const Cancelar = Template.bind({});
Cancelar.args = {
  isCancel: true
}

export const BorderPrimary = Template.bind({})
BorderPrimary.args = {
  isBorderPrimary: true
}

export const IconText = Template.bind({})
IconText.args = {
  isBorderPrimary: false,
  icon: AccountCircleIcon
}

export const Cargando = Template.bind({});
Cargando.args = {
  isLoading: true
}
