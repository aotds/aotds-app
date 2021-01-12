<script>
  import { getContext } from 'svelte';
  import _ from 'lodash';
  //import battle from '../../store/battle';
  //import {bogeys, selected_bogey } from '../../store/bogeys';
  /* import BattleMap from './BattleMap/index.svelte'; */
  import BattleMapPanZoom from './BattleMapPanZoom.svelte';
  import Sidebar from './Sidebar/index.svelte';

  const battle = getContext('battle');
  const battle_store = battle.store;
  const bogeys = battle.bogeys;

  let name;
  $: name = _.get( $battle_store, 'game.name', '' );

  /* const selected_bogey = writable(null); */
  /* setContext('selected_bogey',selected_bogey); */

  /* $: if(!$selected_bogey && bogeys && bogeys.length) { */
  /*   selected_bogey.set(bogeys[0].id); */
  /* } */

  /* const select_bogey = ({detail}) => { */
  /*   selected_bogey.set(detail); */
  /* }; */

</script>

<style>
  .main {
    display: flex;
    width: 100%;
    min-width: 1200px;
  }
  .map {
    flex: 1;
  }
  .sidebar {
    width: 350px;
  }
</style>

<div class="battle_title">Battle of {name}</div>

{#if $battle_store}
<div class="main">
    <div class="map">
      <BattleMapPanZoom bogeys={$bogeys} />
    </div>
    <div class="sidebar">
      <Sidebar />
    </div>
  </div>
{:else }
  loading...
{/if}
