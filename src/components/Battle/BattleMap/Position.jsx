import React from 'react';

const SCALE = 5;

const scaled = length => SCALE * length;

const coords2map = ([x, y]) => [SCALE * x, -SCALE * y];

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
