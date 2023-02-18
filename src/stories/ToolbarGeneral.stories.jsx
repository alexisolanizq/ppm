import React from 'react';
import ToolbarGeneral from '@Component/common/toolbar/ToolbarGeneral';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Icon from '@Component/common/icon/Icon';
import { COLORS } from '@Const/styles';

export default {
  title: 'ToolbarGeneral',
  component: ToolbarGeneral,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
};

const Template = (args) => <ToolbarGeneral {...args} />;

const IconOnClick = <Icon icon={FileUploadIcon} onClick={() => {}} color={COLORS.GRAY}/>;
const IconLink = <Icon icon={AddCircleOutlineIcon} color={COLORS.PRIMARY} to='/'/>;

export const Todo = Template.bind({});
Todo.args = {
  children: 'Soy el texto con acciones',
  actions: [IconOnClick, IconLink]
};

Todo.parameters = { docs: { source: { code: `
  /* 
  import FileUploadIcon from '@mui/icons-material/FileUpload';
  import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
  import { COLOR_GRAY, COLOR_PRIMARY } from '@Const/color';

  const actionsToolbar = [
    <Icon icon={FileUploadIcon} onClick={onClickUpload} color={COLOR_GRAY}/>,
    <Icon icon={AddCircleOutlineIcon} color={COLOR_PRIMARY} to={LINK_CLIENT_ADD}/>,
  ]
   */
  <ToolbarGeneral actions={actions}>Soy el texto con acciones</ToolbarGeneral>;
  ` } } };

export const Texto = Template.bind({});
Texto.args = {
  children: 'Soy sólo texto'
};

export const IconConLink = Template.bind({});
IconConLink.args = {
  children: 'Soy texto más acción con icon de link',
  actions: [IconLink]
};
IconConLink.parameters = { docs: { source: { code: `
  /* 
  import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
  import { COLOR_PRIMARY } from '@Const/color';
  
  const actionsToolbar = [
    <Icon icon={AddCircleOutlineIcon} color={COLOR_PRIMARY} to={LINK_CLIENT_ADD}/>,
  ] */
  <ToolbarGeneral actions={actions}>Soy texto más acción con icon de link</ToolbarGeneral>;
  ` } } };


export const IconConOnClick = Template.bind({});
IconConOnClick.args = {
  children: 'Soy texto más acción con icon de onClick',
  actions: [IconOnClick]
};
IconConOnClick.parameters = { docs: { source: { code: `
  /* 
  import FileUploadIcon from '@mui/icons-material/FileUpload';
  import { COLOR_GRAY } from '@Const/color';

  const actionsToolbar = [
    <Icon icon={FileUploadIcon} onClick={onClickUpload} color={COLOR_GRAY}/>,
  ] */
  <ToolbarGeneral actions={actions}>Soy texto más acción con icon de onClick</ToolbarGeneral;
  ` } } };
