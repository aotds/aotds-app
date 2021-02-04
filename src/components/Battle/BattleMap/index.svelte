<script>
  export let bogeys = [];
  export let radar = false;

  import FireArcs from "./FireArcs/index.svelte";
  import Bogey from "./Bogey/index.svelte";
  import BogeyCourse from "./BogeyCourse/index.svelte";
  import { coords2map } from "./utils";
  import fp from "lodash/fp";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  const selectBogey = (bogey_id) => () => {
    if (radar) return;

    dispatch("selectBogey", bogey_id);
  };

  let map_area = {
    x: 0,
    y: 0,
    height: 850,
    width: 850,
  };

  $: if (bogeys.length > 0) {
    const positions = bogeys.map((b) => b.navigation.coords).map(coords2map);

    const s = [
      [fp.min, fp.max].map((f) => f(positions.map(fp.get("0")))),
      [fp.min, fp.max].map((f) => f(positions.map(fp.get("1")))),
    ];

    const frame = {
      x: s[0][0] - 40,
      y: s[1][0] - 40,
      width: s[0][1] - s[0][0] + 80,
      height: s[1][1] - s[1][0] + 80,
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

  let viewbox = "0 0 600 600";
  $: viewbox = ["x", "y", "width", "height"].map((k) => map_area[k]).join(" ");
</script>

<svg viewBox="{viewbox}" class:radar class:main_map="{!radar}">
  {#each bogeys as bogey (bogey.id)}
    <BogeyCourse bogey="{bogey}" />
  {/each}

  <FireArcs bogeys="{bogeys}" />

  {#each bogeys as bogey (bogey.id)}
    <Bogey {...bogey} radar="{radar}" on:select="{selectBogey(bogey.id)}" />
  {/each}
</svg>

<style>
  .main_map {
    background-image: url("/starbackground.jpg");
    background-repeat: repeat;
    width: 850px;
    height: 850px;
  }

  .radar {
    background-color: black;
  }
</style>
