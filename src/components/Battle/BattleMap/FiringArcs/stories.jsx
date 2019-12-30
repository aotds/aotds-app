import React from 'react';

import {
  withKnobs,
  text,
  boolean,
  number,
  array,
  optionsKnob as options
} from '@storybook/addon-knobs';

import FiringArcs from '.';
import { Bogey } from '../Bogey';

export default {
  title: 'FiringArcs',
  decorators: [withKnobs]
};

export const basic = () => {
  const bogeys = [
      { navigation: { coords: [0, 0], heading: 0    }, weaponry: {
          weapons: [ { show_arc: true, weapon_class: 'Beam', arcs: [ 'F' ] } ]
      }},
      { navigation: { coords: [10, 0], heading: 0    }, weaponry: {
          weapons: [ { show_arc: true, weapon_class: 'Beam', arcs: [ 'F' ] } ]
      }},
  ];

  return (
    <svg
      viewBox="-600 -600 1200 1200"
      width="400"
      height="400"
      style={{ background: 'black' }}
    >
      <FiringArcs bogeys={bogeys} />
      { bogeys.map( bogey => <Bogey {...bogey} /> ) }
    </svg>
  );
};
