import React from 'react';
import Timer from './Timer';

export default {
  title: 'Timer',
  component: Timer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    maxMins: {control: 'number'},
  },
};

const Template = (args) => {
  return <Timer {...args} />;
};

export const TimerInProgress = Template.bind({});

TimerInProgress.args ={
  maxMins: 5,
  handleTimer: () => console.log('handle timer'),
};
