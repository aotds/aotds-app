import Firecons from '../index.svelte';

import { action } from '@storybook/addon-actions';

export default {
    title: "CommandPanel|Firecons"
};

let wp = undefined;

export const basic = () => ({
    Component: Firecons,
    props: {
        firecons: [{ id: 1, target_id: 'siduri' }, { id: 2 }],
        targets: [
            { id: 'siduri', name: 'Siduri' }
        ],
        weapons: [
            { id: 1, weapon_type: 'beam', weapon_class: 1, firecon_id: 1 },
            { id: 2, weapon_type: 'beam', weapon_class: 2,
                firecon_id: wp},
        ]
    },
    on: {
        assign_weapon_to_firecon: event => {
            action('assign weapon to firecon')(event.detail)
            console.log(event);
        }
    }
})
