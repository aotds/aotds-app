import React from 'react';

import { Provider, useSelector } from 'react-redux';
import fp from 'lodash/fp';

import { createStore  } from '../../store/battle';

import Body from './Body';

const BattleBody = () => {
    const bogeys = Object.values(useSelector(fp.getOr([],'battle.bogeys')));
    console.log({bogeys});


    return <Body bogeys={bogeys} />
};

export default function BattlePage({ battle_id }) {
    const store = createStore();
    console.log(store);
    store.dispatch.fetch_battle(battle_id);

    return <Provider store={store}>
        <BattleBody />
    </Provider>
}

