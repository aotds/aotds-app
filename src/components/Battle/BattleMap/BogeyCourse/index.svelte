<script>
  import Bogey from '../Bogey/index.svelte';
  import fp from 'lodash/fp';
  import { coords2map } from '../utils';
  import Position from '../Bogey/Position.svelte';

  function path_for(trajectory) {
    return (
      'M ' +
      trajectory
        .map(p => p.coords)
        .filter(p => p)
        .map(coords2map)
        .map(c => c.join(','))
        .join(' L ')
    );
  }

  export let navigation = {};

  let path = [];
  $: path = path_for(fp.getOr([], 'course.trajectory', navigation));
</script>

<g class="course">
  <path d={path} />
  <Bogey navigation={navigation.course} />
</g>

  <style>
  g {
    opacity: 0.5;
  }
  path {
    stroke: red;
    stroke-width: 3px;
    fill: none;
  }
  </style>
