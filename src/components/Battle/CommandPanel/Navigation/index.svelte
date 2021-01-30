<script>
  import fp from 'lodash/fp';
  import _ from 'lodash';
  import {getContext, createEventDispatcher} from 'svelte';

  import Drive from './Drive/index.svelte';
  import NavItem from './NavItem.svelte';

  export let drive = {};
  export let navigation;
  let orders;
  $: orders = navigation.course.orders;

  let thrust_used;
  $: thrust_used = fp.getOr(0, 'course.thrust_used', navigation);

  const maneuver_types = ['thrust', 'turn', 'bank'];

  const maneuvers = _.get(navigation,'course.maneuvers',{});

  const get_min = type => fp.getOr(0,[
     type, 0
  ], maneuvers);
  const get_max = type => fp.getOr(0,[
     type, 1
  ], maneuvers);

  const battle = getContext('battle');

  const dispatch = createEventDispatcher();

  const set_navigation_order = (payload) => {
    dispatch('set_navigation_order', payload);
  };

</script>

<fieldset>
  <legend>Navigation</legend>

  <div class="velocity">current velocity <span>{navigation.velocity || 0}</span> </div>

  <div class="drive">
    <Drive current={drive.current} rating={drive.rating} {thrust_used} />
  </div>


  {#each maneuver_types as type (type)}
    <NavItem
      min={get_min(type)}
      max={get_max(type)}
      value={orders[type]||0}
      label={type}
      on:input={({target: {value}}) =>
      set_navigation_order({[type]:parseInt(value)})}/>
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
