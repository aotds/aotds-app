import React from 'react';
import Firecons from './index';

export default {
  title: 'Firecons'
};

const props = {
  bogey_id: 'enkidu',
  firecons: [
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    }
  ],
  weapons: [
    {
      id: 1,
      type: 'beam',
      class: 1,
      firecon_id: 1
    },
    {
      id: 2,
      type: 'beam',
      class: 1
    }
  ],
  targets: [
    {
      id: 'siduri',
      name: 'Siduri'
    },
    {
      id: 'gilgamesh',
      name: 'Gilgamesh'
    }
  ]
};

export const basic = () => <Firecons {...props} />;
