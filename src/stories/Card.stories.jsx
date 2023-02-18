import React from 'react';
import Card from '@Component/common/Card/Card';

export default {
  title: 'Card',
  component: Card,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  },
  args: {
    className: ''
  }
};

export const Todo = (args) => (
  <Card {...args}>
    <Card.Header>Header del Card</Card.Header>
    <Card.Body>Body del Card</Card.Body>
    <Card.Footer>Footer del Card</Card.Footer>
  </Card>
);
Todo.parameters = {
  docs: {
    source: {
      code: `
      <Card>
        <Card.Header>Header del Card</Card.Header>
        <Card.Body>Body del Card</Card.Body>
        <Card.Footer>Footer del Card</Card.Footer>
      </Card>
`
    }
  }
};

export const Empty = (args) => <Card {...args} />;

export const CardHeader = (args) => (
  <Card {...args}>
    <Card.Header>Card con Header</Card.Header>
  </Card>
);
CardHeader.parameters = {
  docs: {
    source: {
      code: `
    <Card>
      <Card.Header>Card con Header</Card.Header>
    </Card>
`
    }
  }
};

export const CardBody = (args) => (
  <Card {...args}>
    <Card.Body>Card con Body</Card.Body>
  </Card>
);
CardBody.parameters = {
  docs: {
    source: {
      code: `
    <Card>
      <Card.Body>Card con Body</Card.Body>
    </Card>
`
    }
  }
};

export const CardFooter = (args) => (
  <Card {...args}>
    <Card.Footer>Card con Footer</Card.Footer>
  </Card>
);
CardFooter.parameters = {
  docs: {
    source: {
      code: `
    <Card>
      <Card.Footer>Card con Footer</Card.Footer>
    </Card>
`
    }
  }
};
