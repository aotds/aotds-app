<script>
  export let navigation = {};
  import Position from './Position.svelte';

</script>

<style>
div {
  background-color: red;
}
</style>

<Position {...navigation}>
<use
  href="/svg/ship/generic.svg#ship_generic"
  transform="scale(0.4)"
/>
</Position>
