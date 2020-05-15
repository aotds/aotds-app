import Firecons from '../index.svelte';

export default {
    title: "CommandPanel|Firecons"
};

export const basic = () => ({
    Component: Firecons,
    props: {
        firecons: [{ id: 1, target_id: 'siduri' }, { id: 2 }],
        targets: [
            { id: 'siduri', name: 'Siduri' }
        ],
        weapons: [
            { id: 1, weapon_type: 'beam', weapon_class: 1, firecon_id: 1 },
            { id: 1, weapon_type: 'beam', weapon_class: 2 },
        ]
    }
})
