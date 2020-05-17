<script>
import { coords2map } from '../utils';

const heading2angle = heading => 30 * heading;

const coordsTransform = (coords, heading) => {
  let t = coords2map(coords).join(',');
  return `rotate( ${heading2angle(heading)}, ${t} ) translate(${t})`;
};

  export let coords = [0,0];
  export let heading = 0;

  let transform;
  $: transform = coordsTransform(coords, heading);

</script>

<g {transform}><slot /></g>;
