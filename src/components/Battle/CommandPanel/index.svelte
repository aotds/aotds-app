<script>
  export let bogey = {};

  import fp from 'lodash/fp';
  import _ from 'lodash';
  import Structure from './Structure.svelte';
  import Navigation from './Navigation/index.svelte';

  let orders_sent;
  $: orders_sent = fp.getOr(false, 'orders.issued', bogey);

  const send_orders = () => {};

  let navigation_orders;
  $: navigation_orders = fp.getOr({}, 'orders.navigation', bogey);

  let shields, hull;
  $: shields = _.get( bogey, 'weaponry.shields', [] );
  $: hull = _.get( bogey, 'structure.hull', undefined);
  $: armor = _.get(bogey, 'structure.armor', undefined );

</script>

<div>
  <h1>{bogey.name}</h1>

  <Structure {shields} {hull} {armor} />

  <input
    type="button"
    value={orders_sent ? 'orders sent' : 'send orders'}
    disabled={orders_sent}
    on:click={send_orders} />

  <Navigation
    drive={bogey.drive}
    orders={navigation_orders}
    navigation={bogey.navigation} />

</div>
<style>
  div {
    max-width: 350px;
  }
</style>
