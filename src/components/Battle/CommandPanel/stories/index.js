import Component from '../index.svelte';

import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
  title: 'CommandPanel',
    decorators: [withKnobs]
};

const bogey = {
  name: 'Enkidu',
  structure: {
    hull: { current: 3, rating: 6 },
    armor: { current: 3, rating: 6 },
  }
}

export const basic = () => ({
    Component,
    props: {
      bogey
    },
    on: {
    }
}
);
