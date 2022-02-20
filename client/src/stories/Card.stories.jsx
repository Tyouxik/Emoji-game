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
    card: {id: 'random id', imagePath: `cool-blue-2-right.jpg`},
    isSelected: false,
    showHint: false,
    isHint: false,
  },
};

const Template = (args) => <Card {...args} />;

export const Regular = Template.bind({});

export const Selected = Template.bind({});
Selected.args= {
  isSelected: true,
};
