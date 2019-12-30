import React from 'react';

import {
  withKnobs,
  text,
  boolean,
  number,
  array,
  optionsKnob as options
} from '@storybook/addon-knobs';

import FiringArc from '.';
import { Bogey } from '../../Bogey';

export default {
  title: 'FiringArcs/FiringArc',
  decorators: [withKnobs]
};

export const basic = () => {
  const bogey = {
    navigation: {
      coords: [0, 0],
      heading: number('ship heading', 0, {
        range: true,
        min: -6,
        max: 6,
        step: 1
      })
    }
  };
    let selected_arcs = options(
        'arcs',
        {
            F: 'F',
            FP: 'FP',
            'FS': 'FS',
            'A': "A",
            'AF': 'AF',
            'AS': 'AS',
        },
        'F',
        { display: 'multi-select' },
    );
    if(!Array.isArray(selected_arcs))
        selected_arcs = [ selected_arcs ];
    console.log({selected_arcs});

  const weapon = {
    id: 1,
    weapon_class: number('weapon class', 1),
    weapon_type: 'Beam',
      arcs: selected_arcs
  };
  console.log(weapon);

  return (
    <svg
      viewBox="-600 -600 1200 1200"
      width="400"
      height="400"
      style={{ background: 'black' }}
    >
      <FiringArc
        coords={[0, 0]}
        heading={bogey.navigation.heading}
        {...weapon}
      />
      <Bogey {...bogey} />
    </svg>
  );
};
