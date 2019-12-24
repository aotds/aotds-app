import React from 'react';
import fp from 'lodash/fp';

import Drive from './Drive';
import NavItem from './NavItem';

export default function Navigation({
  drive,
  orders = {},
  navigation,
  onOrdersChange = () => {}
}) {
  return (
    <fieldset>
      <legend>Navigation</legend>

      <Drive
        drive={drive}
        thrust_used={fp.getOr(0, 'navigation.course.thrust_used', this)}
      />

      {['thrust', 'turn', 'bank']
        .map(type => [type, navigation.maneuvers[type]])
        .filter(x => x[1])
        .map(([type, maneuvers]) => (
          <NavItem
            key={type}
            min={maneuvers[0]}
            max={maneuvers[1]}
            value={orders[type]}
            label={type}
            onChange={value => onOrdersChange({ [type]: value })}
          />
        ))}
    </fieldset>
  );
}
