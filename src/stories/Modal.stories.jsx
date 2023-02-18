import Modal from '@Component/common/Modal/Modal';
import React, { useState } from 'react';

export default {
  title: 'Modal',
  component: Modal,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  },
  argTypes: {
    onClose: { action: 'onClose' },
    maxWidth: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    }
  },
  args: {
    onClose: () => {},
    maxWidth: 'sm'
  }
};

const Template = (args) => {
  const [isShow, setShow] = useState(true);

  return (
    <Modal isShow={isShow} onClose={() => setShow(!isShow)} {...args}>
      Soy el cuerpo del modal
    </Modal>
  );
};

export const Todo = Template.bind({});
Todo.args = {
  title: 'Hola soy el titulo'
};
