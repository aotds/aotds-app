<script>
	import { dux } from '@aotds/aotds-battle';

	import Unknown from './Unknown.svelte';
	import General from './General.svelte';

	export let battle = {};
	export let entry = {};

	$: shipName = battle.bogeys[entry.payload.bogeyId].name;
	$: coords = entry.payload.movement.coords;
	$: heading = entry.payload.movement.heading;
	$: thrust = entry.payload.movement.thrustUsed;
	$: velocity = entry.payload.movement.velocity;
</script>

<div>
	<span class="data">{shipName}</span>
	{#if thrust}
		burns <span>{thrust}</span>,
	{/if}
	moves to <span class="data">[ {coords.join(', ')} ]</span>, heading
	<span class="data">{heading}</span>
	with a velocity of <span>{velocity}</span>.
</div>

<style>
	details {
		margin-left: 1em;
	}
	span {
		color: #005b7c;
	}
</style>
