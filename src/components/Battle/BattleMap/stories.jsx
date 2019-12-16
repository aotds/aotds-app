import React from "react";
import u from 'updeep';

import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import BattleMap from './index';

export default {
    title: 'BattleMap',
    decorators: [ withKnobs ],
};

const bogeys = [
    { id: 'enkidu', navigation: { coords: [10, -10], heading: 0, } },
    { id: 'siduri', navigation: { coords: [20, -20], heading: 2, } }
];

export const basic = () => {
    const radar = boolean('radar',false) ;
    return <div style={{ height: "600px" }}><BattleMap bogeys={bogeys}
        radar={radar}
        viewBox="-150 -150 600 600"
        onSelectBogey={action('select_bogey')}
        onClickMap={action('click_map')}
        onDragMap={action('drag_map')}
        /></div>
};
