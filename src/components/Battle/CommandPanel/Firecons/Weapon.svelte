<script>
  import { onMount, getContext } from "svelte";
  import { bars } from "svelte-awesome/icons";
  import { createEventDispatcher } from "svelte";

  export let weapon_type;
  export let weapon_class;
  export let weapon_id;

  let Icon;

  onMount(async () => {
    Icon = (await import("svelte-awesome")).default;
  });

  const dispatch = createEventDispatcher();

  const show_weapon_arcs = (show_arcs) => () =>
    dispatch("show_weapon_arcs", {
      show_arcs,
      weapon_id,
    });
</script>

<div
  class="weapon"
  data-weapon-id="{weapon_id}"
  on:mouseenter="{show_weapon_arcs(true)}"
  on:mouseleave="{show_weapon_arcs(false)}"
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
