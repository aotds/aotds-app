import Navigation from '../index.svelte';

import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
  title: 'CommandPanel|Navigation',
    decorators: [withKnobs]
};

const drive = { current: 3, rating: 6,  };

const orders = { thrust: 1, turn: 0, bank: 0 };

const navigation = {
  maneuvers: {
    thrust: [-3, 3],
    turn: [-1, 1],
    bank: [-1, 1]
  },
  course: {
    maneuvers: {
      thrust: [-2, 2],
      turn: [-1, 1],
      bank: [-1, 1]
    },
      thrust_used:  2
  }
};

export const basic = () => ({
    Component: Navigation,
    props: {
        drive,
        orders,
        navigation,
    },
    on: {
        orders_change:action('order change')
    }
}
);
