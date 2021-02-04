<script>
  import BogeyFireArcs from "./BogeyFireArcs.svelte";
  export let bogeys = [];
</script>

{#each bogeys as bogey (bogey.id)}
  <BogeyFireArcs
    coords="{bogey.navigation.course.coords}"
    heading="{bogey.navigation.course.heading}"
    weapons="{bogey.weaponry.weapons}"
  />
{/each}

<style>
</style>
