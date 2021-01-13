<script>
  import CommandPanel from '../CommandPanel/index.svelte';
  import { getContext } from 'svelte';
  import _ from 'lodash';

  const { bogeys } = getContext('battle');

  let bogey;
  $: bogey = _.find( $bogeys, 'selected' );

</script>

<style>
</style>

<CommandPanel {bogey} />
