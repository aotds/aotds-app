<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let min;
  export let max;
  export let label;
  export let value;

  let internal = value;

  $: if( internal !== value ) internal = value;

  $: console.log(value);
</script>

<div>
  <label>{label}</label>
  <span class="value">{value}</span>
  <input type="range" {min} {max} bind:value on:input|preventDefault|capture|stopPropagation />

</div>

  <style>
  div {
    display: flex;
    align-content: baseline;
  }
    label {
      display: inline-block;
      width: 5em;
    }

    .value {
      font-family: var(--font-accent);
    }
  </style>

