import React from "react";
import { Position } from './Position';
import classNames from 'classnames';

import styles from './Bogey.module.css';

export const Bogey = ({navigation,selected=false,onClick=()=>true}) => {

    const click_bogey = e => {
        e.stopPropagation();
        onClick(e);
    };

    return <Position {...navigation}>
    <use
      className={classNames(styles.bogey,{[styles.selected]: selected})}
      onClick={click_bogey}
      href="/svg/ship/generic.svg#ship_generic"
      transform="scale(0.4)"
    />
  </Position>

};

export default Bogey;
