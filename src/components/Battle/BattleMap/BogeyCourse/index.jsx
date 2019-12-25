import React from 'react';

import Bogey from '../Bogey';
import fp from 'lodash/fp';
import { coords2map } from '../utils';

function path_for(trajectory) {
  return (
    "M " +
    trajectory
      .map(p => p.coords)
      .filter(p => p)
      .map(coords2map)
      .map(c => c.join(","))
      .join(" L ")
  );
}


export default function BogeyCourse({ navigation }) {
    const path = path_for(
        fp.getOr([],'course.trajectory',navigation));

  return (
    <g className="course" opacity="0.5">
      <path d={path} fill="none" stroke="red" strokeWidth="3" />
      <Bogey navigation={ navigation.course} />
    </g>
  );
}

