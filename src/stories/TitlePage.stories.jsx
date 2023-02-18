import React from 'react';

import TitlePage from '@Component/common/Text/TitlePage';

export default {
  title: 'TitlePage',
  component: TitlePage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    className: ''
  }
};

const Template = (args) => <TitlePage {...args} />;

export const Titulo = Template.bind({});
Titulo.args = {
  children: 'Listado de Clientes'
};