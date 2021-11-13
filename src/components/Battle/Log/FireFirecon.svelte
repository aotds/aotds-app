<script>
	import { dux } from '@aotds/aotds-battle';

	import General from './General.svelte';

	export let battle = {};
	export let entry = {};

	$: attacker = battle.bogeys[entry.payload.bogeyId].name;
	$: fireconId = entry.payload.fireconId;
</script>

<div>
	{attacker} firecon {fireconId} fires its weapons.

	<div class="subactions">
		{#each entry.subactions as entry (entry)}
			<General {entry} {battle} />
		{/each}
	</div>
</div>

<style>
	.subactions {
		margin-left: 1em;
	}
</style>
