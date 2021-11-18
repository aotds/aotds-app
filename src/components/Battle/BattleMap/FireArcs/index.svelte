<script>
	import { plotMovement } from '@aotds/aotds-battle';

	import BogeyFireArcs from './BogeyFireArcs.svelte';

	export let bogeys = [];
</script>

{#each bogeys as bogey (bogey.id)}
	<BogeyFireArcs {...plotMovement(bogey)} weapons={bogey.weaponry.weapons} />
{/each}

<style>
</style>
