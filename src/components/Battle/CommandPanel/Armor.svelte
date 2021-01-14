<script>
  import Meter from './Meter.svelte';

  export let current = 0;
  export let rating = 0;

  let title = '';
  $: title = [ current, rating ].join(' / ');
</script>

<Meter name="armor" {current} {rating} />
