<script>
	import { dux } from '@aotds/aotds-battle';

	import General from './General.svelte';

	export let battle = {};
	export let entry = {};

	$: aborted = entry.payload.outcome.aborted;
</script>

{#if aborted}
	but holds its fire, {aborted}.
{:else}
	and fire!
	<div class="subactions">
		{#each entry.subactions as entry (entry)}
			<General {entry} {battle} />
		{/each}
	</div>
{/if}

<style>
	.subactions {
		margin-left: 1em;
	}
</style>
