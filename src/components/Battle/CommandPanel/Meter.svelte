<script>
  export let current = 0;
  export let rating = 0;
  export let name = "system";
  export let width = "170px";

  let title = '';
  $: title = [ current, rating ].join(' / ');
</script>

<style>
  .comp {
    width: 170px;
  }

  .header {
    display: flex;
    margin: 0px 1em;
  }
  .value {
    flex: 1;
    text-align: right;
    font-family: var(--font-accent);
  }
  meter {
    width: 100%;
  }
</style>

<div class="comp" style={`width: ${width}`}>
  <div class="header">
    <div class="name">{name}</div><div class="value">{current}</div>
  </div>
  <meter min="0" max={rating} value={current} title={ title } />
</div>
