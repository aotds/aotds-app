import React, { useState, useEffect } from 'react';
import BattleMap from './BattleMap';
import fp from 'lodash/fp';
import { coords2map } from './BattleMap/utils';
import { addV } from 'react-use-gesture';

import styles from './BattleMapPanZoom.module.css';

export default function BattleMapPanZoom({ bogeys }) {
  const [center, set_center] = useState(null);

  const [map_area, set_map_area] = useState({
    x: 0,
    y: 0,
    height: 600,
    width: 600
  });

  useEffect(() => {
    const positions = bogeys.map(b => b.navigation.coords).map(coords2map);

    if (positions.length === 0) return;

    const s = [
      [fp.min, fp.max].map(f => f(positions.map(fp.get('0')))),
      [fp.min, fp.max].map(f => f(positions.map(fp.get('1'))))
    ];

    const frame = {
      x: s[0][0] - 40,
      y: s[1][0] - 40,
      width: s[0][1] - s[0][0] + 80,
      height: s[1][1] - s[1][0] + 80
    };

    if (frame.width < 600) {
      frame.x -= (600 - frame.width) / 2;
      frame.width = 600;
    }

    if (frame.height < 600) {
      frame.y -= (600 - frame.height) / 2;
      frame.height = 600;
    }

    set_map_area(frame);
  }, [bogeys]);

  useEffect(() => {
    if (center) return;
    if (!bogeys || bogeys.length == 0) return;
    set_center(coords2map(bogeys[0].navigation.coords));
  });

  const [viewbox, set_viewbox] = useState('0 0 600 600');

  const [zoom, set_zoom] = useState(1);

  const zoom_map = delta => {
    set_zoom(Math.min(4, Math.max(zoom + delta / 100, 1)));
  };

  useEffect(() => {
    if (!center) return;
    console.log('zoom: ', zoom);
    set_viewbox(
      [
        center[0] - fp.round((zoom * map_area.width) / 2),
        center[1] - fp.round((zoom * map_area.height) / 2),
        map_area.width * zoom,
        map_area.height * zoom
      ].join(' ')
    );
  }, [center, map_area, zoom]);

  useEffect(() => {
    console.log(viewbox);
  }, [viewbox]);

  const drag_map = e => {
    set_center(
      addV(
        center,
        e.map(x => -x)
      )
    );
    console.log(e);
  };

  return (
    <div className={styles.wrapper}>
      <BattleMap
        bogeys={bogeys}
        viewbox={viewbox}
        onDragMap={drag_map}
        onZoomMap={zoom_map}
      />
      <div className={styles.radar}>
        <BattleMap
          bogeys={bogeys}
          radar
          zonebox={viewbox}
          viewbox={`${map_area.x} ${map_area.y} ${map_area.width} ${map_area.height}`}
        />
      </div>
    </div>
  );
}
