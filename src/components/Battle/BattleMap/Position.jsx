import React from 'react';

import { coords2map } from './utils';

const heading2angle = heading => 30 * heading;

const coordsTransform = (coords, heading) => {
  let t = coords2map(coords).join(',');
  return `rotate( ${heading2angle(heading)}, ${t} ) translate(${t})`;
};

export const Position = ({ children, coords = [0, 0], heading = 0 }) => {
  const transform = coordsTransform(coords, heading);

  return <g transform={transform}>{children}</g>;
};

export default Position;
