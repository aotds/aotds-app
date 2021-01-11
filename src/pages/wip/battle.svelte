<Battle />

<script>
  import Battle from '../../components/Battle/index.svelte';
  import battle from '../../store/battle';
  import { inflate_battle }
   from '@aotds/aotds-battle';

  battle.set(inflate_battle({
    game: {
      name: 'Epsilon 5',
    }
  }))

</script>

<style>
div {
  background-color: red;
}
</style>
