<script>
  import BogeyFireArcs from "./BogeyFireArcs.svelte";
  export let bogeys = [];
</script>

{#each bogeys as bogey (bogey.id)}
  <BogeyFireArcs
    coords="{bogey.navigation.coords}"
    heading="{bogey.navigation.heading}"
    weapons="{bogey.weaponry.weapons}"
  />
{/each}

<style>
</style>
