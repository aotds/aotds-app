<script>
  /* import { getContext } from 'svelte'; */
  import { writable } from 'svelte/store';
  import _ from 'lodash';
  import battle from '../../store/battle';
  import {bogeys, selected_bogey } from '../../store/bogeys';
  /* import BattleMap from './BattleMap/index.svelte'; */
  import BattleMapPanZoom from './BattleMapPanZoom.svelte';
  /* import Sidebar from './Sidebar/index.svelte'; */

  let name;
  $: name = _.get( $battle, 'game.name', '' );

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
</style>

<div class="battle_title">Battle of {name}</div>

<div class="battle_main">{#if $battle}
    <BattleMapPanZoom bogeys={$bogeys} />
    <!-- <Sidebar /> -->
{:else }
  loading...
{/if}
</div>
