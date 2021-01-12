<Battle />

<script>
  import Battle from '../../components/Battle/index.svelte';
  import battle from '../../store/battle';
  import sample from './sample_game';

  battle.set(sample);

</script>

<style>
div {
  background-color: red;
}
</style>
