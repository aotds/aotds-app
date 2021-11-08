<script>

    /** @type {[number,number]} */
  export let coords = [0,0];

  export let heading = 0;

  export let selected = false;

  /** @type {string} */
  export let id;

  import Position from './Bogey/Position.svelte';
  import { createEventDispatcher, getContext } from 'svelte';

  const battle = getContext('battle');

  export let radar = false;

  const dispatch = createEventDispatcher();


  let select;
  $: select = () => dispatch('selectBogey', id);

</script>

<style>
  .bogey {
    fill: white;
  }
  .selected {
    stroke: red;
  }
</style>

<Position {coords} {heading}>
<use
  on:click={select}
  class="bogey"
  class:selected
  href="/svg/ship/generic.svg#ship_generic"
  transform="scale(0.4)"
/>
</Position>
