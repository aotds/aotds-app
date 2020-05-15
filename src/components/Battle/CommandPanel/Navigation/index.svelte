<script>
  import fp from 'lodash/fp';

  import Drive from './Drive/index.svelte';
  import NavItem from './NavItem.svelte';

  export let drive;
  export let navigation;
  export let orders = {};

  let thrust_used;
  $: thrust_used = fp.getOr(0, 'course.thrust_used', navigation);

  const maneuver_types = ['thrust', 'turn', 'bank'];

  const get_min = type => fp.getOr(0,[
    'maneuvers', type, 0
  ]);
  const get_max = type => fp.getOr(0,[
    'maneuvers', type, 1
  ]);

</script>

<fieldset>
  <legend>Navigation</legend>

  <Drive {drive} {thrust_used} />

  {#each maneuver_types as type (type)}
    <NavItem
      min={get_min(type)(navigation)}
      max={get_max(type)(navigation)}
      value={orders[type]||0}
      label={type}
      on:change={x => console.log(x.target.value)}/>
  {/each}

</fieldset>
