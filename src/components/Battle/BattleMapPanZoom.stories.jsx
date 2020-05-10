import React from 'react';
import u from 'updeep';

import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import BattleMapPanZoom from './BattleMapPanZoom';

export default {
  title: 'BattleMapPanZoom',
  decorators: [withKnobs]
};

const bogeys = [
  { id: 'enkidu', navigation: { coords: [10, -10], heading: 0 } },
  { id: 'siduri', navigation: { coords: [20, -20], heading: 2 } }
];

const store = configureStore()({});

export const basic = () => {
  return (
      <Provider store={store}>
    <div style={{ height: '800px' }}>
      <BattleMapPanZoom bogeys={bogeys} />
    </div>
      </Provider>
  );
};
