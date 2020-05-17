<script>
  export let firecon_id;
  export let targets = [];
  export let target_id;
  export let weapons = [];

  import Targets from './Targets.svelte';
  import Weapon from './Weapon.svelte';
</script>

<div class="firecon" data-firecon-id={firecon_id}>
  <h2>
    {#if firecon_id}Firecon {firecon_id}{:else}Standby{/if}
  </h2>

  {#if firecon_id}
    <Targets {targets} {target_id} />
  {/if}

  <div class="weapons" data-firecon-id={firecon_id}>
    {#each weapons as weapon (weapon.id)}
      <Weapon {...weapon} weapon_id={weapon.id}/>
    {/each}
      <div>&nbsp;</div>
  </div>

</div>

<style>
  :global(.draggable-container--over) {
    background-color: pink;

  }
</style>
