<script>
  export let targets = [];
  export let target_id;
</script>

<style>
</style>


<select bind:value={target_id}>
    <option value="">--none--</option>
  {#each targets as target (target.id)}
    <option value={target.id}>{target.name}</option>
  {/each}

</select>
