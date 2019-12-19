import React from 'react';

import classNames from 'classnames';
import styles from './styles.module.css';

const Shield = ({ level, damaged }) => {
  return (
    <span
      className={classNames([styles.shield, { [styles.damaged]: damaged }])}
    >
      {level}
    </span>
  );
};

export default function Shields({ shields = [] }) {
  return (
    <div>
      shields:
      {shields.map(shield => (
        <Shield key={shield.id} {...shield} />
      ))}
    </div>
  );
}
