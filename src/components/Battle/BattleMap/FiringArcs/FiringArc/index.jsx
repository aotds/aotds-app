import React from 'react';
import fp from 'lodash/fp';

import { arc_ranges } from '@aotds/battle';
import Position from '../../Position';
import { map_scale } from '../../utils';

import styles from './styles.module.css';

function polarToCartesian(centerX, centerY, radius, angle) {
  const angleInRadians = ((angle - 3) * Math.PI) / 6.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  console.log(start);

  const arcSweep = endAngle - startAngle <= 6 ? '0' : '1';

  return [
    'M',
    start.x,
    start.y,
    'A',
    radius,
    radius,
    0,
    arcSweep,
    0,
    end.x,
    end.y,
    'L',
    x,
    y,
    'L',
    start.x,
    start.y
  ].join(' ');
}

const Arc = ({ arc, level }) => {
  const d = describeArc(0, 0, map_scale(12 * level), ...arc);

  return <path className={styles.firing_arc} d={d} />;
};

export default function FiringArc({
  coords,
  heading,
  weapon_type,
  weapon_class,
  arcs
}) {
  arcs = fp.flatten(arcs.map(arc => arc_ranges[arc]));
  console.log(arcs);

  return (
    <Position coords={coords} heading={heading}>
      {fp
        .range(1, weapon_class + 1)
        .map(level => arcs.map(arc => <Arc level={level} arc={arc} />))}
      {/*
      {fp.flatten(
        fp
          .range(1, weapon_class + 1)
          .map(level =>
            arcs.map(arc => (
            ))
          )
      )}
      */}
    </Position>
  );
}
