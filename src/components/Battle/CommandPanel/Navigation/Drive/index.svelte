<script>
  export let current = 0;
  export let rating = 0;
  export let thrust_used = 0;
</script>


    <div class="drive">
      drive
      <span>{current}</span>
        <progress max={current} value={thrust_used}>
          {thrust_used}
        </progress>

    </div>

  <style>
    .drive {
      display: flex;
    }
    span {
      flex: 1;
      display: inline-block;
      text-align: right;
      font-family: var(--font-accent);
      margin-right: 1em;
    }
    progress {
      width: 170px;
    }
  </style>
