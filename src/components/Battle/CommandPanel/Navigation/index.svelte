<script>
  import fp from 'lodash/fp';

  import Drive from './Drive/index.svelte';
  import NavItem from './NavItem.svelte';

  export let drive;
  export let navigation;
  export let orders = {};

  let thrust_used;
  $: thrust_used = fp.getOr(0, 'course.thrust_used', navigation);

  let maneuver_types = ['thrust', 'turn', 'bank'];
</script>

<fieldset>
  <legend>Navigation</legend>

  <Drive {drive} {thrust_used} />

  {#each maneuver_types as type (type)}
    <NavItem
      min={navigation.maneuvers[type][0]}
      max={navigation.maneuvers[type][1]}
      value={orders[type]}
      label={type}
      on:change={x => console.log(x.target.value)}/>
  {/each}

</fieldset>
