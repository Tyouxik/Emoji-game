import React from 'react';

import {Card} from "./Card"
export default {
    title: 'Card',
    component: Card,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  };