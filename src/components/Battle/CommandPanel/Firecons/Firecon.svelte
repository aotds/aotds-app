<script>
  export let firecon_id;
  export let targets = [];
  export let target_id;
  export let weapons = [];
  export let bogey_id;

  import Targets from "./Targets.svelte";
  import Weapon from "./Weapon.svelte";
  import { getContext, createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  const battle = getContext("battle");

  const setFireconTarget = ({ detail: target_id }) => {
    dispatch("setFireconTarget", {
      firecon_id,
      target_id,
    });
  };
</script>

<div class="firecon" data-firecon-id="{firecon_id}">
  <div class="firecon-header">
    <h2>{firecon_id || "Standby"}</h2>
    <div class="spacer"><hr /></div>
    {#if firecon_id}
      <Targets
        targets="{targets}"
        target_id="{target_id}"
        on:setFireconTarget="{setFireconTarget}"
      />
    {/if}
  </div>

  <div class="weapons" data-firecon-id="{firecon_id}">
    {#each weapons as weapon (weapon.id)}
      <Weapon {...weapon} weapon_id="{weapon.id}" bogey_id="{bogey_id}" />
    {/each}
    <div>&nbsp;</div>
  </div>
</div>

<style>
  :global(.draggable-container--over) {
    background-color: pink;
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
