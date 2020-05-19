<script>
  export let battle;

  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import battle_store from './store';
  import BattleMap from './BattleMap/index.svelte';
  import BattleMapPanZoom from './BattleMapPanZoom.svelte';

  // now get the battle from the rest server.
  const [ store, loaded ] = battle_store(battle);

  setContext('battle',store);
  let bogeys = [];
  $: bogeys = $store && $store.bogeys;

  const selected_bogey = writable(null);
  setContext('selected_bogey',selected_bogey);

  $: if(!$selected_bogey && bogeys && bogeys.length) {
    selected_bogey.set(bogeys[0].id);
  }

  const select_bogey = ({detail}) => {
    selected_bogey.set(detail);
  };

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
  <BattleMapPanZoom {bogeys} on:select_bogey={select_bogey} />
{:catch error}
  Oops {error}
{/await}

