import React from 'react';

import CommandPanel from '.';

export default {
  title: 'CommandPanel'
};

const bogey = {
  id: 'enkidu',
  name: 'Enkidu',
  drive: { current: 3, rating: 6 },
  weaponry: {
    firecons: [{ id: 1 }, { id: 2 }, { id: 3 }],
    weapons: [
      { id: 1, type: 'beam', class: 1, firecon_id: 1 },
      { id: 2, type: 'beam', class: 1 }
    ]
  },
  navigation: {
    maneuvers: {
      thrust: [0, 3],
      bank: [-1, 1],
      turn: [-1, 1]
    },
    course: {
      thrust_used: 2
    }
  },
  structure: {
    hull: { current: 3, rating: 16 },
    armor: { current: 3, rating: 6 },
    shields: [
      { id: 1, level: 1 },
      { id: 2, level: 2, damaged: true }
    ]
  },
  orders: {
    navigation: {
      thrust: 0,
      turn: 0,
      bank: 0
    }
  }
};

const bogeys = [
  { id: 'enkidu', name: 'Enkidu' },
  { id: 'siduri', name: 'Siduri' },
  { id: 'gilgamesh', name: 'Gilgamesh' }
];

export const basic = () => <CommandPanel bogey={bogey} bogeys={bogeys} />;
