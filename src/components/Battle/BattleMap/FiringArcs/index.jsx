import React from 'react';
import FiringArc from './FiringArc';
import fp from 'lodash/fp';

const FiringArcsBogey = ({navigation,weaponry}) => {
    const to_show = fp.filter('show_arc')(weaponry.weapons);

    if(to_show.length === 0 ) return null;

    return <g>
        {
            to_show.map( weapon =>
                        <FiringArc { ...navigation } {...weapon} />
                            )
        }
    </g>;

};

export default function FiringArcs({bogeys=[]}) {

    return <g> {
    bogeys.map(
        bogey => <FiringArcsBogey {...bogey} />
            )
    }</g>;

}

