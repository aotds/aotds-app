<CommandPanel {bogey} />

<script>
  import {inflate_bogey} from '@aotds/aotds-battle';
  import CommandPanel from '~C/Battle/CommandPanel/index.svelte';

  const bogey = inflate_bogey({
    drive: {
      current: 4,
      rating: 8,
    },
    navigation: {
      course: {
        thrust_used: 2
      },
      maneuvers: {
        thrust: [-4, 4],
        turn: [-2,2],
        bank: [-2,2],
      }
    },
    name: 'Enkidu',
    structure: {
      hull: {
        current: 5,
        rating: 8,
      },
      armor: 10,
    },
    weaponry: {
      shields: [1,2,2],
    },
    orders: {
      navigation: {
        thrust: 1,
        bank: 1,
        turn: -1,
      }
    }
  });
  /* console.log(bogey); */


</script>

<style>
</style>
