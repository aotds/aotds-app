<script>
  import Position from "../Bogey/Position.svelte";
  import WeaponArc from "./WeaponArc.svelte";

  export let coords = [0, 0];
  export let weapons = [];
  export let heading = 0;

  $: console.log(weapons);
</script>

<Position coords="{coords}" heading="{heading}">
  {#each weapons as weapon (weapon.id)}
    {#if weapon.show_arcs}
      {#each weapon.arcs as arc (arc)}
        <WeaponArc weaponClass="{weapon.weapon_class}" arc="{arc}" />
      {/each}
    {/if}
  {/each}
</Position>

<style>
  circle {
    fill: red;
  }
</style>
