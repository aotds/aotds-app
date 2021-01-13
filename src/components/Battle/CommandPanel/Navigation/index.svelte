<script>
  import fp from 'lodash/fp';

  import Drive from './Drive/index.svelte';
  import NavItem from './NavItem.svelte';

  export let drive = {};
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

  <div class="velocity">current velocity <span>{navigation.velocity || 0}</span> </div>

  <div class="drive">
    <Drive current={drive.current} rating={drive.rating} {thrust_used} />
  </div>


  {#each maneuver_types as type (type)}
    <NavItem
      min={get_min(type)(navigation)}
      max={get_max(type)(navigation)}
      value={orders[type]||0}
      label={type}
      on:change={x => console.log(x.target.value)}/>
  {/each}

</fieldset>

  <style>
    .velocity span {
      font-family: var(--font-accent);
      margin-left: 2em;
    }
    .velocity {
      margin-bottom: 1em;
    }
    .drive {
      margin-bottom: 1em;
    }
  </style>
