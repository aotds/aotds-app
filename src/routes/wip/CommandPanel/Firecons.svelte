<div >
  <Firecons {firecons} {targets} {weapons} on:assign_weapon_to_firecon />
</div>

<script>
  import Firecons from '~C/Battle/CommandPanel/Firecons/index.svelte';

  const {firecons, targets, weapons } = {
        firecons: [{ id: 1, target_id: 'siduri' }, { id: 2 }],
        targets: [
            { id: 'siduri', name: 'Siduri' }
        ],
        weapons: [
            { id: 1, weapon_type: 'beam', weapon_class: 1, firecon_id: 1 },
            { id: 2, weapon_type: 'beam', weapon_class: 2,
                firecon_id: 2},
        ]
    }
</script>

<style>
div {
  width: 350px;
  font-family: RobotoLight;
}

  div :global(legend) {
    font-family: 'RobotoMedium';

  }

  div :global(h2) {
    font-size: 1.2em;
  }

</style>
