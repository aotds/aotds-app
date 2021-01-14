<script>
  import Shield from "./Shield.svelte";

  export let shields = [];
</script>

<div>
  shields:
  {#each shields as shield (shield.id)}
    <Shield {...shield} />
  {/each}
</div>

<style>
  div {
    margin-top: 0.5em;
  }
</style>
