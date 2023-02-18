import TextFieldController from '@Component/common/TextField/TextFieldController';
import React from 'react';
import { useForm } from 'react-hook-form';

export default {
  title: 'TextFieldController',
  component: TextFieldController,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  },
  argTypes: { onEnterChange: { action: 'onEnterChange' } },
  args: {
    className: ''
  }
};


const Template = (args) => {
  const {control} = useForm()
  return <TextFieldController control={control} {...args} />;
}

export const Normal = Template.bind({});
Normal.args = {
  name: 'nameInput',
  label: 'Soy un label',
  placeholder: 'Soy el placeholder',
  rules: { required: true }
}
Normal.parameters = {
  docs: {
    source: {
      code: `
      /*
      Rules en https://react-hook-form.com/api/useform/register#options
      */
      <TextFieldController 
        control={control}
        name='nameInput'
        label='Soy un label'
        onEnterChange={(value) => {}}
        placeholder='Soy el placeholder'
        rules={{required: true }}  />
`
    }
  }
};

