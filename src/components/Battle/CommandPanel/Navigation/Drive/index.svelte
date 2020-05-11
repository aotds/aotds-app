<script>
  export let drive;
  export let thrust_used;
</script>


    <div class="drive">
      drive: {thrust_used} / {drive.current}
      <div class="bar">
        <progress max={drive.current} value={thrust_used}>
          {thrust_used}
        </progress>
      </div>
    </div>
