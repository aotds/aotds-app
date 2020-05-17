<script>
  export let battle;

  import { setContext } from 'svelte';
  import battle_store from './store';
  import BattleMap from './BattleMap/index.svelte';

  // now get the battle from the rest server.
  const [ store, loaded ] = battle_store(battle);

  setContext('battle',store);
  let bogeys = [];
  $: bogeys = $store && $store.bogeys;

</script>

<style>
div {
  background-color: red;
}
</style>

This is the battle of {battle}

{#await loaded}
  loading...
{:then}
  We have a battle! {JSON.stringify($store)}
  <BattleMap {bogeys} />

{:catch error}
  Oops {error}
{/await}

