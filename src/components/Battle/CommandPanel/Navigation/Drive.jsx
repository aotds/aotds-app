import React from 'react';

export default function Drive({ drive, thrust_used }) {
  return (
    <div className="drive">
      drive: {thrust_used} / {drive.current}
      <div class="bar">
        <progress max={drive.current} value={thrust_used}>
          {thrust_used}
        </progress>
      </div>
    </div>
  );
}
