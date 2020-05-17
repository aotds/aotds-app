<script>
  export let firecons = [];
  export let weapons = [];
  export let targets;

  import Firecon from './Firecon.svelte';
  import fp from 'lodash/fp';
  import dragndrop from './dragndrop';

  const weapons_for = id =>
    weapons.filter(({ firecon_id }) => firecon_id === id);
</script>

<style>
  div {
    background-color: red;
  }
</style>

<fieldset use:dragndrop on:assign_weapon_to_firecon>
  <legend>Firecons</legend>

  {#each firecons as firecon (firecon.id)}
    <Firecon
      firecon_id={firecon.id}
      {targets}
      target_id={firecon.target_id}
      weapons={weapons_for(firecon.id)} />
  {/each}

  <Firecon weapons={weapons_for(undefined)} />

</fieldset>
