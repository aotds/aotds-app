<script>
  export let bogey = {};

  import fp from 'lodash/fp';
  import Structure from './Structure.svelte';

  let orders_sent;
  $: orders_sent = fp.getOr(false, 'orders.issued', bogey);

  const send_orders = () => {};

</script>

<div>
  <h1>{bogey.name}</h1>

  <Structure {...bogey.structure} />

      <input
        type="button"
        value={orders_sent ? 'orders sent' : 'send orders'}
        disabled={orders_sent}
        on:click={send_orders}
      />

</div>
