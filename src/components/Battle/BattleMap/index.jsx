import React from 'react';

import { useDrag, useWheel } from 'react-use-gesture';

import classNames from 'classnames';

import styles from './styles.module.css';
import { Bogey } from './Bogey';

const RadarBox = ({ zonebox = '' }) => {
  const x = zonebox.split(' ');
  const dimensions = {
    x: x[0],
    y: x[1],
    width: x[2],
    height: x[3]
  };

  return <rect className={styles.zonebox} {...dimensions} />;
};

export default function BattleMap({
  radar,
  zonebox,
  bogeys,
  viewbox,
  onSelectBogey = () => true,
  onClickMap = () => true,
  onDragMap = () => true,
  onZoomMap = () => true
}) {
  const drag_bind = useDrag(({ down, delta, movement }) => {
    if (down) return onDragMap(delta);
    if (movement[0] === 0 && movement[0] === 0) return onClickMap();
  });

  const wheel_bind = useWheel(({ delta: [x, y] }) => {
    onZoomMap(y);
  });

  return (
    <svg
      className={radar ? styles.radar : styles.mainMap}
      viewBox={viewbox}
      {...drag_bind()}
      {...wheel_bind()}
    >
      {radar && <RadarBox zonebox={zonebox} />}

      {bogeys.map(bogey => (
        <Bogey
          {...bogey}
          key={bogey.id}
          onClick={() => onSelectBogey(bogey.id)}
        />
      ))}
    </svg>
  );
}
