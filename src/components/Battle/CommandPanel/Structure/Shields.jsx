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

