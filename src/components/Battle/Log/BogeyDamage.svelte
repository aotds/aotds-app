<script>
	import { dux } from '@aotds/aotds-battle';

	import General from './General.svelte';

	export let battle = {};
	export let entry = {};

	$: ship = battle.bogeys[entry.payload.bogeyId].name;
	$: damage = entry.payload.damage;
	$: penetrating = entry.payload.penetrating;
</script>

<div>
	{ship} takes {damage}
	{#if penetrating}penetrating{/if} damages.
</div>
