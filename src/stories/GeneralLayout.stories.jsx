import GeneralLayout from '@Component/layout/GeneralLayout';
import { actionsClientDetalle, sidebarClientDetalle } from '@Hooks/generals/useClientDetail';
import React from 'react';

export default {
  title: 'GeneralLayout',
  component: GeneralLayout,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    isTitleFlex: false,
    isHideTitle: false
  }
};

const prevLinks = [{ link: '/catalogos', nombre: 'Catálogos' }];
const actions = actionsClientDetalle
const sidebar = sidebarClientDetalle

const Template = (args) => <GeneralLayout {...args}>Soy un children dentro de general Layout</GeneralLayout>;
const TemplateSidebar = (args) => <GeneralLayout {...args}><GeneralLayout.Sidebar sidebar={sidebar}>Soy un children dentro de general Layout con sidebar</GeneralLayout.Sidebar></GeneralLayout>;
export const Todo = Template.bind({});
Todo.args = {
  title: 'Hola soy el titulo',
  prevLinks,
  actions,
  isLoading: false
}

export const Title = Template.bind({});
Title.args = {
  title: 'Hola soy el titulo',
}

export const TitleHide = Template.bind({});
Title.args = {
  title: 'Hola soy el titulo',
  isHideTitle: true
}

export const TitleFlex = Template.bind({});
TitleFlex.args = {
  title: 'Hola soy el titulo',
  isTitleFlex: true
}

export const Cargando = Template.bind({});
Cargando.args = {
  title: 'Hola soy el titulo',
  isLoading: true
}

export const MaxWidth = Template.bind({});
MaxWidth.args = {
  title: 'Hola tengo maxWidth en mi contenido',
  maxWidth: 100
}

export const PrevLinks = Template.bind({});
PrevLinks.args = {
  title: 'Titulo',
  prevLinks
}

export const Actions = Template.bind({});
Actions.args = {
  title: 'Titulo',
  actions
}

export const Sidebar = TemplateSidebar.bind({});
Sidebar.args = {
  title: 'Hola soy el titulo',
  prevLinks,
  actions,
  isLoading: false,
  isHideTitle: true
}