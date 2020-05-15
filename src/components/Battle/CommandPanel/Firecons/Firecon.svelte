<script>
  export let firecon_id;
  export let targets = [];
  export let target_id;
  export let weapons = [];

  import Targets from './Targets.svelte';
  import Weapon from './Weapon.svelte';
</script>

<div>
  <h2>
    {#if firecon_id}Firecon {firecon_id}{:else}Standby{/if}
  </h2>

  {#if firecon_id}
    <Targets {targets} {target_id} />
  {/if}

  <div class="weapons">
    {#each weapons as weapon (weapon.id)}
      <Weapon {...weapon} />
    {/each}
  </div>

</div>
