<script>
  import { map_scale } from "../utils";
  import { polarToCartesian, plotArc } from "./utils";

  export let weaponClass = 1;
  export let arc = "F";

  let d;
  $: d = plotArc(arc, map_scale(12 * weaponClass));
</script>

<path d="{d}"></path>

<style>
  path {
    fill: red;
    stroke: red;
    opacity: 0.4;
  }
</style>
