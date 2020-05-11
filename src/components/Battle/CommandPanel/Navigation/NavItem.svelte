<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let min;
  export let max;
  export let label;
  export let value;

</script>

<div>
  <label>{label}</label>
  <input type="range" {min} {max} {value} on:change />

</div>

