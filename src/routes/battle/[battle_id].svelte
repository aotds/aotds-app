<script context="module">
  import Battle from '~C/Battle';

  export async function preload({params: {battle_id}}) {
    return {battle_id};
  }
</script>

<Battle {battle_id} />

<script>
  export let battle_id;
</script>

