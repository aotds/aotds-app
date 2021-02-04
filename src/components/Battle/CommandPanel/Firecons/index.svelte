<script>
  import { getContext } from "svelte";

  export let firecons = [];
  export let weapons = [];
  export let targets = [];
  export let bogey_id;

  import Firecon from "./Firecon.svelte";
  import fp from "lodash/fp";

  import dragndrop from "./dragndrop";

  const weapons_for = (id) =>
    weapons.filter(({ firecon_id }) => firecon_id === id);
</script>

<fieldset use:dragndrop on:assignWeaponToFirecon>
  <legend>Firecons</legend>

  {#each firecons as firecon (firecon.id)}
    <Firecon
      on:show_weapon_arcs
      on:setFireconTarget
      bogey_id="{bogey_id}"
      firecon_id="{firecon.id}"
      targets="{targets}"
      target_id="{firecon.target_id}"
      weapons="{weapons_for(firecon.id)}"
    />
  {/each}

  <Firecon weapons="{weapons_for(undefined)}" on:show_weapon_arcs />
</fieldset>

<style>
</style>
