<script>
	import { dux } from '@aotds/aotds-battle';

	import Unknown from './Unknown.svelte';
	import General from './General.svelte';

	export let battle = {};
	export let entry = {};

	const actionMap = {};
</script>

<div>
	<h3>Movement phase</h3>
	{#each entry.subactions as entry (entry)}
		<General {entry} {battle} />
	{/each}
</div>

<style>
	details {
		margin-left: 1em;
	}
</style>
