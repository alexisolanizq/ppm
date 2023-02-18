import Card from '@Component/common/card/Card';
import Flex from '@Component/common/flex/Flex';
import React from 'react';

export default {
  title: 'Flex',
  component: Flex,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  },
  args: {
    className: ''
  }
};

const CardChildren = ({ repeat = 2 }) => {
  const drawCards = () => {
    const cards = []
    for(let x = 1; x <= repeat; x+=1){
      cards.push(<Card><Card.Body /></Card>)
    }
    return cards
  }

  return drawCards()
}

const Template = (args) => <Flex {...args}><CardChildren /></Flex>;
const TemplateMultiple = (args) => <Flex {...args}><CardChildren repeat={40}/></Flex>;
export const Horizontal = Template.bind({});
Horizontal.args = {
  isVertical: false,
  gap: 25
}

export const Vertical = Template.bind({});
Vertical.args = {
  isVertical: true,
  gap: 10
}

export const CenterHorizontal = Template.bind({});
CenterHorizontal.args = {
  isCenterHorizontal: true,
  gap: 10
}

export const Wrap = TemplateMultiple.bind({});
Wrap.args = {
  isWrap: true,
  gap: 10,
  repeat: 10
}