import React from 'react';
import ImageUpload from '@Component/common/ImageUpload/ImageUpload';
import ImageUploadController from '@Component/common/ImageUpload/ImageUploadController';
import { useForm } from 'react-hook-form';

export default {
  title: 'ImageUpload',
  component: ImageUpload,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: { onClick: { action: 'onClick' } },
  args: {
    className: ''
  }
};



const Template = (args) => <ImageUpload {...args} />;
export const LimiteKB = Template.bind({});
LimiteKB.args = {
  limitSize: 1024,
}

export const Value = Template.bind({});
Value.args = {
  value: 'https://assets-es.imgfoot.com/media/cache/1200x1200/messi-psg-portrait-champions-league-1.jpg',
}

export const ControllerImage = () => {
  const {control} = useForm()

  return <ImageUploadController control={control} name='imagen'/>
}