<script>
  import { onMount, getContext } from "svelte";
  import { bars } from "svelte-awesome/icons";
  import { createEventDispatcher } from "svelte";

  export let weapon_type;
  export let weapon_class;
  export let weapon_id;
  export let bogey_id;

  let Icon;

  onMount(async () => {
    Icon = (await import("svelte-awesome")).default;
  });

  const { showWeaponArcs } = getContext("battle");

  const dispatch = createEventDispatcher();

  const enter = () => {
    showWeaponArcs({
      show_arcs: true,
      bogey_id,
      weapon_id,
    });
    console.log("yeah?");
  };

  const leave = () =>
    showWeaponArcs({
      show_arcs: false,
      bogey_id,
      weapon_id,
    });
</script>

<div
  class="weapon"
  data-weapon-id="{weapon_id}"
  on:mouseenter="{enter}"
  on:mouseleave="{leave}"
>
  <svelte:component this="{Icon}" data="{bars}" flip="vertical" />
  <span> {weapon_type} {weapon_class}</span>
</div>

<style>
  div {
    display: flex;
    align-items: center;
    margin-left: 2em;
  }
  span {
    display: inline-block;
    margin-left: 0.5em;
  }
</style>
