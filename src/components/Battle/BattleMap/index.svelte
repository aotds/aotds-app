<svg>
  {#each bogeys as bogey (bogey.id)}
    <Bogey {...bogey} />
  {/each}
</svg>


<script>
  export let bogeys = [];

  import Bogey from './Bogey/index.svelte';
</script>

<style>
svg {
  background-image: url('/starbackground.jpg');
  background-repeat: repeat;
  width: 100%;
  height: 100%;
}
</style>
