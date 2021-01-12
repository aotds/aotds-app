<script>
  export let navigation = {};
  export let id;

  import Position from './Position.svelte';
  import { createEventDispatcher, getContext } from 'svelte';

  const battle = getContext('battle');

  export let radar = false;

  const dispatch = createEventDispatcher();

  export let selected = false;

  const select = () => battle.select_bogey(id);

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
  on:click={select}
  class="bogey"
  class:selected
  href="/svg/ship/generic.svg#ship_generic"
  transform="scale(0.4)"
/>
</Position>
