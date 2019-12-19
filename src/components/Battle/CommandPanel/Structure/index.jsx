import React from 'react';

import Hull from './Hull';
import Armor from './Armor';
import Shields from './Shields';

export default function Structure({ hull, armor, shields }) {
  console.log(shields);

  return (
    <div>
      <fieldset className="structure">
        <legend>Structure</legend>
        <Hull {...hull} />
        <Armor {...armor} />
        <Shields shields={shields} />
      </fieldset>
    </div>
  );
}
