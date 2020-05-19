<script>
  export let navigation = {};
  export let id;

  import Position from './Position.svelte';
  import { createEventDispatcher, getContext } from 'svelte';

  export let radar = false;

  const dispatch = createEventDispatcher();

  const selected_bogey = getContext('selected_bogey');

  let selected = false;
  $: selected = $selected_bogey === id;

</script>

<style>
div {
  background-color: red;
}
  .bogey {
    fill: white;
  }
  .selected {
    stroke: red;
  }
</style>

<Position {...navigation}>
<use
  on:click={() => dispatch('select')}
  class="bogey"
  class:selected
  href="/svg/ship/generic.svg#ship_generic"
  transform="scale(0.4)"
/>
</Position>
