<script>
	import General from './General.svelte';

	export let battle = {};
	export let entry = {};
</script>

<div>
	<h3>Weapon firing phase</h3>
	{#each entry.subactions || [] as entry (entry)}
		<General {entry} {battle} />
	{:else}
		<div>No ship opens fire.</div>
	{/each}
</div>

<style>
</style>
