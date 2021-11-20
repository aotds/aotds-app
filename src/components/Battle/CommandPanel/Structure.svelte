<script>
	export let hull = {};
	export let armor = {};

	export let shields = [];

	import Armor from './Armor.svelte';
	import Shields from './Shields/index.svelte';
	import Meter from './Meter.svelte';
</script>

<div class="structure">
	<Meter name="Hull" {...hull} />

	{#if armor.rating} <Armor {...armor} /> {/if}
</div>

{#if shields.length}
	<div class="shields">
		<Shields {shields} />
	</div>
{/if}

<style>
	.structure {
		display: flex;
	}
	.structure > :global(*) {
		margin-right: 1em;
	}

	.shields {
		width: 100%;
	}
</style>
