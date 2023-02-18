import React from 'react';
import LinkIconText from '@Component/common/Link/LinkIconText';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default {
  title: 'LinkIconText',
  component: LinkIconText,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <LinkIconText {...args} />;

export const Todo = Template.bind({});
Todo.args = {
  icon: VisibilityIcon,
  text: 'Link con icono',
  to: '/general'
}
Todo.parameters = { docs: { source: { code: `
/* 
import VisibilityIcon from '@mui/icons-material/Visibility';
 */
<LinkIconText icon={VisibilityIcon} text="Link con icono" to="/general" />
` } } };