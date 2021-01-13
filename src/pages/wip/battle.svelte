<Battle />

<script>
  import { setContext } from 'svelte';
  import Battle from '../../components/Battle/index.svelte';
  import BattleStore from '../../store/battle';
  import sample from './sample_game';

  const battle = BattleStore();
  battle.store.set(sample);

  setContext('battle',battle);

</script>

<style>
div {
  background-color: red;
}
</style>
