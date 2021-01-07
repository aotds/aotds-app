<script>
  export let hull = {};
  export let armor = {};

  export let shields = [];

  import Hull from './Hull.svelte';
  import Armor from './Armor.svelte';
  import Shields from './Shields/index.svelte';
</script>

<style>
  .structure {
    display: flex;
  }
  .structure > :global(*) {
    margin-right: 1em;
  }

  .shields {
    width: 100%;
  }

</style>

<div class="structure">

  <Hull {...hull} />

  {#if armor.rating} <Armor {...armor} /> {/if}


</div>

  {#if shields.length}
    <div class="shields">
      <Shields {shields} />
    </div>
  {/if}

