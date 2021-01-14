<script>
  export let targets = [];
  export let target_id;
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
<select bind:value={target_id}>
    <option value="">--none--</option>
  {#each targets as target (target.id)}
    <option value={target.id}>{target.name}</option>
  {/each}

</select>
  </label>
