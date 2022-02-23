import React from 'react';
import Card from './Card';

export default {
  title: 'Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    card: {required: true},
    isSelected: {control: 'boolean', required: true},
    showHint: {control: 'boolean', required: true},
    isHint: {control: 'boolean', required: true},
  },
  args: {
    card: {
      type: 'cool',
      color: 'yellow',
      number: 1,
      tilted: 'left',
      imgName: 'cool-yellow-3-left.jpg',
      id: '0',
      score: 2211,
    },
    isSelected: false,
    showHint: false,
    isHint: false,
  },
};

const Template = (args) => {
  return <Card {...args} />;
};

export const Regular = Template.bind({});

export const Selected = Template.bind({});
Selected.args= {
  isSelected: true,
};
