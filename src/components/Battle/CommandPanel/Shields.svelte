<script>
  import Shield from './Shields/Shield.svelte';

  export let shields = [];
</script>

<div>
  shields:
  {#each shields as shield (shield.id)}
    <Shield {...shield} />
  {/each}
</div>
