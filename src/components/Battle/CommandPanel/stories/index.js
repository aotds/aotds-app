import Component from '../index.svelte';

import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import { inflateBogey } from 'aotds-battle';
import u from 'updeep';

export default {
  title: 'CommandPanel',
    decorators: [withKnobs]
};

const bogey = u.updateIn('weaponry.shields.1', {damaged: true})(inflateBogey({
  name: 'Enkidu',
  structure: {
    hull: { current: 3, rating: 6 },
    armor: { current: 3, rating: 6 },
  },
    weaponry: {
        shields: [ 1, 1, 2 ],
    }
}));

export const basic = () => ({
    Component,
    props: {
      bogey
    },
    on: {
    }
}
);
