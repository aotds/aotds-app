<svg use:svgpanzoom viewBox="0 0 600 600">
  <g class="viewport">
  {#each bogeys as bogey (bogey.id)}
    <Bogey {...bogey} />
  {/each}
</g>
</svg>


<script>
  export let bogeys = [];

  import Bogey from './Bogey/index.svelte';
  import svgpanzoom from './svgpanzoom';
</script>

<style>
svg {
  background-image: url('/starbackground.jpg');
  background-repeat: repeat;
  width: 600px;
  height: 600px;
}
</style>
