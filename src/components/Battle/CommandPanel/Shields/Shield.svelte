<script>
  export let level;
  export let damaged;

  import classnames from 'classnames';
</script>

<style>
  .shield {
  display: inline-block;
  width: 1.2em;
  height: 1.2em;
  border-radius: 0.6em;
  text-align: center;
  background-color: lightgreen;

  }

.damaged {
  background-color: pink;
}
</style>

<span class={classnames(['shield', { damaged }])} >
  {level}
</span>
