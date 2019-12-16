import React from "react";
import u from 'updeep';

import { Bogey } from './Bogey';

import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
    title: 'Bogey',
    decorators: [ withKnobs ],
};

const bogey = {
    navigation: {
        coords: [10, -10],
        heading: 0,
        course: {
            trajectory: [ { type: 'POSITION', coords: [5,-5] } ],
        },
    }
};

export const basic = () => {
    const heading = number( 'heading', 0, { range: true, min: 0, max: 11 });

    let b = u.updateIn( 'navigation.heading', heading, bogey);

    b = u.updateIn('selected', boolean( 'selected', false ) )(b);

    return <svg width="100" height="100" style={{ background: "black" }}>
    <Bogey { ...b } />
</svg>
};
