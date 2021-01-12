import _ from 'lodash';
import u from '@yanick/updeep';

import { writable, readable, derived, get } from "svelte/store";

import battle from './battle';

const seed_bogey = () => _.get( get(battle), 'bogeys.0', null );

export const selected_bogey = writable( seed_bogey() );

battle.subscribe( $battle => {
    const selected = get(selected_bogey);

    if( _.find(_.get($battle,'bogeys',[]), {id:selected} ) ) return;

    selected_bogey.set(
        _.get( seed_bogey(), 'id', null )
    );
});

export const bogeys = derived( [battle, selected_bogey], ([$battle, $selected_bogey], set) => {
    set( _.get( $battle, 'bogeys', [] ).map( u.if( _.matches({id: $selected_bogey}), { selected: true }) ))
});

export function select_bogey(id) {
    selected_bogey.set(id);
}
