<script>
  export let hull = {};
  export let armor = {};

  import Hull from './Hull.svelte';
  import Armor from './Armor.svelte';
</script>

<style>
div {
  background-color: red;
}
</style>

<fielset class="structure">
  <legend>Structure</legend>
  <Hull {...hull} />
  <Armor {...armor} />
</fielset>
