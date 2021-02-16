<script>
  import { getContext } from "svelte";
  import groupBy from "lodash/groupBy";

  export let firecons = [];
  export let weapons = [];
  export let targets = [];
  export let bogey_id;

  import Firecon from "./Firecon.svelte";
  import fp from "lodash/fp";

  const weapons_for = (id) =>
    weapons.filter(({ firecon_id }) => firecon_id === id);

  let firecon_weapons = {};
  $: {
    firecon_weapons = Object.fromEntries(
      Array.from({ length: firecons.length + 1 }, (x, i) => [i, []])
    );

    weapons.forEach((w) => {
      firecon_weapons[w.firecon_id || 0].push(w);
    });
  }
</script>

<fieldset>
  <legend>Firecons</legend>

  {#each firecons as firecon (firecon.id)}
    <Firecon
      on:assignWeaponToFirecon
      on:show_weapon_arcs
      on:setFireconTarget
      {bogey_id}
      firecon_id={firecon.id}
      {targets}
      target_id={firecon.target_id}
      weapons={firecon_weapons[firecon.id] || []}
    />
  {/each}

  <Firecon
    weapons={firecon_weapons[0] || []}
    firecon_id={0}
    on:assignWeaponToFirecon
    on:show_weapon_arcs
  />
</fieldset>

<style>
</style>
