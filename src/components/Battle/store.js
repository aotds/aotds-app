import { writable } from 'svelte/store';

async function fetch_battle(name) {
    return fetch('/api/battle/'+name).then( res => res.json() );
}

export default function battle_store(name) {

    const store = writable(null);
    const loaded = fetch_battle(name).then(
        store.set
    );

    return [ store, loaded ];
}
