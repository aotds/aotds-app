<script>
  export let bogey = {};

  import fp from 'lodash/fp';
  import Structure from './Structure.svelte';
  import Navigation from './Navigation/index.svelte';

  let orders_sent;
  $: orders_sent = fp.getOr(false, 'orders.issued', bogey);

  const send_orders = () => {};

  let navigation_orders;
  $: navigation_orders = fp.getOr({}, 'orders.navigation', bogey);
</script>

<div>
  <h1>{bogey.name}</h1>

  <Structure shields={ bogey.weaponry.shields } hull={bogey.structure.hull}
    armor={bogey.structure.armor} />

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
