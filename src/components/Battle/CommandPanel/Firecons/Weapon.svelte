<script>
  import {onMount} from 'svelte';
  import { bars } from 'svelte-awesome/icons';

  export let weapon_type;
  export let weapon_class;
  export let weapon_id;

  let Icon;

  onMount( async () => {
    Icon = (await import('svelte-awesome')).default;
  });
</script>

<style>
  div {
    display: flex;
    align-items: center;
    margin-left: 2em;
  }
  span {
    display: inline-block;
    margin-left: 0.5em;
  }
</style>

<div class="weapon" data-weapon-id={weapon_id}>
  <svelte:component this={Icon} data={bars} flip="vertical" />
  <span>
    {weapon_type} {weapon_class}</span>
</div>
