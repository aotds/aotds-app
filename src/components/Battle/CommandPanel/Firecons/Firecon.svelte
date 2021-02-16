<script>
  const flipDurationMs = 200;

  export let firecon_id;
  export let targets = [];
  export let target_id;
  export let weapons = [];
  export let bogey_id;

  let items = weapons || [];

  import Targets from "./Targets.svelte";
  import Weapon from "./Weapon.svelte";
  import { getContext, createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  const battle = getContext("battle");

  let dragged_over = false;

  const setFireconTarget = ({ detail: target_id }) => {
    dispatch("setFireconTarget", {
      firecon_id,
      target_id,
    });
  };

  const drop_weapon = (e) => {
    dragged_over = false;
    dispatch("assignWeaponToFirecon", {
      firecon_id,
      weapon_id: e.dataTransfer.getData("text/plain"),
    });
  };
</script>

<div
  class="firecon"
  data-firecon-id={firecon_id}
  class:dragged_over
  on:dragenter|stopPropagation={(e) => {
    dragged_over = true;
    return false;
  }}
  on:dragleave|stopPropagation={() => {
    dragged_over = false;
  }}
  on:dragend={() => {
    dragged_over = false;
  }}
  on:dragover|preventDefault={() => (dragged_over = true)}
  on:drop|preventDefault={drop_weapon}
>
  <div class="firecon-header">
    <h2>{firecon_id || "Standby"}</h2>
    <div class="spacer"><hr /></div>
    {#if firecon_id}
      <Targets {targets} {target_id} on:setFireconTarget={setFireconTarget} />
    {/if}
  </div>

  <div class="weapons" data-firecon-id={firecon_id}>
    {#each weapons as weapon (weapon.id)}
      <Weapon
        on:show_weapon_arcs
        {...weapon}
        weapon_id={weapon.id}
        {bogey_id}
      />
    {:else}
      <div>&nbsp;</div>
    {/each}
  </div>
</div>

<style>
  .dragged_over {
    background-color: lightgray;
  }

  .firecon-header {
    display: flex;
    align-items: baseline;
  }

  .firecon-header .spacer {
    flex: 1;
    margin: 0px 1em;
  }
</style>
