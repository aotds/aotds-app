<script>
  export let current = 0;
  export let rating = 0;

  let title = '';
  $: title = [ current, rating ].join(' / ');
  import Meter from './Meter.svelte';
</script>

<Meter name="hull" {current} {rating} />
