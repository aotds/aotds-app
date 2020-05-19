<svg viewBox={viewbox}
  class:radar={radar}
  class:main_map={!radar}
>
  {#each bogeys as bogey (bogey.id)}
    <Bogey {...bogey} {radar} on:select={select_bogey(bogey.id)} />
  {/each}
</svg>


<script>
  export let bogeys = [];
  export let radar = false;

  import Bogey from './Bogey/index.svelte';
  import svgpanzoom from './svgpanzoom';
  import { coords2map } from './utils';
  import fp from 'lodash/fp';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  const select_bogey = (bogey_id) => () => {
    if(radar) return;

    dispatch('select_bogey',bogey_id);
  }

  let map_area = {
    x: 0,
    y: 0,
    height: 600,
    width: 600
  };

  $: if (bogeys.length > 0) {
    const positions = bogeys.map(b => b.navigation.coords).map(coords2map);

    const s = [
      [fp.min, fp.max].map(f => f(positions.map(fp.get('0')))),
      [fp.min, fp.max].map(f => f(positions.map(fp.get('1'))))
    ];

    const frame = {
      x: s[0][0] - 40,
      y: s[1][0] - 40,
      width: s[0][1] - s[0][0] + 80,
      height: s[1][1] - s[1][0] + 80
    };

    if (frame.width < 600) {
      frame.x -= (600 - frame.width) / 2;
      frame.width = 600;
    }

    if (frame.height < 600) {
      frame.y -= (600 - frame.height) / 2;
      frame.height = 600;
    }

    map_area = frame;
  }

  let viewbox = "0 0 600 600"
  $: viewbox = ['x','y','width','height'].map(k => map_area[k]).join(" ");
</script>

<style>
.main_map {
  background-image: url('/starbackground.jpg');
  background-repeat: repeat;
  width: 600px;
  height: 600px;
}

.radar {
  background-color: black;
}
</style>
