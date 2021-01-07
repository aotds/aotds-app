<script>
  export let level = 1;
  export let damaged = false;
</script>

<style>
  .shield {
  display: inline-block;
  width: 1.2em;
  height: 1.2em;
  border-radius: 0.6em;
  text-align: center;
  background-color: lightgreen;
  font-family: var(--font-accent);
  margin-right: 0.5em;

  }

.damaged {
  background-color: pink;
}
</style>

<span class='shield' class:damaged>
  {level}
</span>
