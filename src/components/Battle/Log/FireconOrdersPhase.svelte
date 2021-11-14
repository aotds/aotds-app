<script>
	import General from './General.svelte';

	export let battle = {};
	export let entry = {};
</script>

<div>
	<h3>Firecon orders phase</h3>
	{#each entry.subactions || [] as entry (entry)}
		<General {entry} {battle} />
	{:else}
		<div>No firecon activity detected.</div>
	{/each}
</div>

<style>
</style>
