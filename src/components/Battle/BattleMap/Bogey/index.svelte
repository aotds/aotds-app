<script>
  export let navigation = {};
  export let id;

  import Position from './Position.svelte';
  import { createEventDispatcher, getContext } from 'svelte';

  import {select_bogey} from '../../../../store/bogeys';

  export let radar = false;

  const dispatch = createEventDispatcher();

  export let selected = false;

  const select = () => select_bogey(id);

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
