import React from 'react';
import Bogey  from '../Bogey';
import BogeyCourse  from '.';
import { plot_movement } from '@aotds/battle/build/rules/movement';
import u from 'updeep';
import {withKnobs, number} from '@storybook/addon-knobs';
import { coords2map } from '../utils';

export default {
    title: 'BogeyCourse',
    decorators: [ withKnobs ],
};

const basic_bogey = {
    drive: { current: 6 },
    navigation: {
        coords: [10, -10],
        heading: 0,
        velocity: 3,
        course: {
            trajectory: [
            { type: 'POSITION', coords: [10,-5] },
            { type: 'POSITION', coords: [5,0] }
            ],
        },
    }
};


export const basic = () => {
    const orders = {
        thrust: number( 'thrust', 0 ),
        turn: number( 'turn', 0 ),
        bank: number( 'bank', 0 ),
    };
    let bogey = basic_bogey;

    console.log(coords2map([10,-10]));


    bogey = u({
        navigation: {
            heading: number('heading',0),
            velocity: number('velocity',3),
        }
    }, bogey );

    bogey = u.updateIn( 'navigation.maneuvers', u.constant(plot_movement(bogey,{}).maneuvers), bogey );
    bogey = u.updateIn( 'navigation.course', u.constant(plot_movement(bogey,orders)), bogey);
    console.log(bogey);


    return <svg
viewBox="280 220 200 200"
width="200" height="200" style={ {background:"black"} }>
        <BogeyCourse {...bogey } />
        <Bogey { ...bogey } />
    </svg>
};
