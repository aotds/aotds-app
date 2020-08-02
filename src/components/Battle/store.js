import { writable } from 'svelte/store';
import {plotMovement} from 'aotds-battle';
import u from 'updeep';

async function fetch_battle(name) {
    let battle = await fetch('/api/battle/'+name).then( res => res.json() );

    battle = u.updateIn( 'bogeys',
        u.map(
            bogey => u.updateIn('navigation.course', u.constant(plotMovement(bogey)), bogey )
        ), battle
    );

    console.log(battle);


    return battle;
}

export default function battle_store(name) {

    const store = writable(null);
    const loaded = fetch_battle(name).then(
        store.set
    );

    return [ store, loaded ];
}
