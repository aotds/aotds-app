<script>
	import { dux } from '@aotds/aotds-battle';

	export let battle = {};
	export let entry = {};

	const shipName = (id) => dux.selectors.bogey(battle)(id).name;

	$: orders = Object.entries(entry.payload.orders || {});
	$: attacker = shipName(entry.payload.bogeyId);
</script>

{#each orders as [fireconId, { targetId }] (fireconId)}
	<div>
		<span class="data"> {attacker}</span>'s firecon
		<span class="data">{fireconId}</span>
		locks on <span class="data">{shipName(targetId)}</span>.
	</div>
{/each}

<style>
	.data {
		color: #005b7c;
	}
</style>
