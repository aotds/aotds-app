<script>
	import General from './General.svelte';

	export let subactions = [];
	export let battle = {};
</script>

{#each subactions as entry (entry)}
	<General {entry} {battle} />
{/each}
