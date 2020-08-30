<script>
  import BattleMap from './BattleMap/index.svelte';
  import Bogey from './BattleMap/Bogey/index.svelte';
  import { onMount } from 'svelte';

  export let bogeys = [];

  onMount(async() => {
    const thumbnailViewer = await import(
      './BattleMapPanZoom/thumbnailViewer');
    thumbnailViewer.default({
      mainViewId: '.main_map',
      thumbViewId: '.radar'
    });
  });
</script>

<style>
  .main_map_section {
    width: 600px;
    height: 600px;
  }

  .thumbViewClass,
  :global(.radar) {
    border: 1px solid black;
    position: absolute;
    bottom: 5px;
    left: 5px;
    width: 20%;
    height: 30%;
    margin: 3px;
    padding: 3px;
    overflow: hidden;
  }

  :global(.radar) {
    z-index: 110;
    background: white;
  }

  #scopeContainer {
    z-index: 120;
  }
</style>

<div class="main_map_section">
  <BattleMap {bogeys} on:select_bogey />
</div>

<div class="thumbViewContainer">
  <svg id="scopeContainer" class="thumbViewClass">
    <g>
      <rect
        id="scope"
        fill="red"
        fill-opacity="0.1"
        stroke="red"
        stroke-width="2px"
        x="0"
        y="0"
        width="0"
        height="0" />
    </g>
  </svg>
  <BattleMap {bogeys} radar />
</div>

