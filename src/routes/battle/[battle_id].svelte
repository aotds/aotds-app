<script context="module">
  import Battle from '~C/Battle';

  export async function preload(page,context) {
    const { battle_id } = page.params;

    return {battle_id};
  }
</script>

<Battle {battle_id} />

<script>
  export let battle_id;
</script>

