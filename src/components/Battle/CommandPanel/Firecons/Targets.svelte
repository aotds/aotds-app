<script>
  import { createEventDispatcher } from 'svelte';
  export let targets = [];
  export let target_id;


  let localTargetId = target_id;

  $: if( localTargetId !== target_id ) localTargetId = target_id;

  const dispatch = createEventDispatcher();

  const updateTarget = ({target:{value}}) => {
    console.log(value);
    dispatch(
    'setFireconTarget', value
  )};

</script>

<style>
  label {
    display: block;
    text-align: right;
  }
  select {
    margin-left: 1em;
  }
</style>


<label>targeting
  <select bind:value={localTargetId}
    on:change={updateTarget}
  >
    <option value="">--none--</option>
  {#each targets as target (target.id)}
    <option value={target.id}>{target.name}</option>
  {/each}

</select>
</label>
