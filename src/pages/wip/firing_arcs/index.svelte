<script>
	import Bogey from '../../../components/Battle/BattleMap/Bogey.svelte';
	import FireArcs from '../../../components/Battle/BattleMap/FireArcs/index.svelte';

	let arcs = {};
	let show_arcs = true;
	let heading = 0;
	let beamClass = 1;

	let bogeys;
	$: bogeys = [
		{
			id: 1,
			navigation: {
				coords: [0, 0],
				heading,
				course: {
					coords: [0, 0],
					heading,
				},
			},
			weaponry: {
				weapons: [
					{
						show_arcs,
						weapon_class: beamClass,
						arcs: Object.entries(arcs)
							.filter(([key, value]) => value)
							.map(([key]) => key),
					},
				],
			},
		},
		{
			id: 2,
			navigation: {
				coords: [12, 0],
				heading: 0,
				course: {
					coords: [12, 0],
					heading: 0,
				},
			},
			weaponry: {
				weapons: [],
			},
		},
	];
</script>

<svg viewBox="-200 -600 800 800" width="400" height="400">
	<FireArcs {bogeys} />
	{#each bogeys as bogey (bogey.id)}
		<Bogey {...bogey} />
	{/each}
</svg>

<div>
	{#each ['F', 'FS', 'AS', 'A'] as arc (arc)}
		<label>{arc} <input type="checkbox" bind:checked={arcs[arc]} /></label>
	{/each}

	<label>show arcs <input type="checkbox" bind:checked={show_arcs} /></label>

	<label>heading <input type="number" bind:value={heading} /></label>
	<label>beam class <input type="number" bind:value={beamClass} /></label>
</div>

<style>
	svg {
		background: black;
	}
	label {
		display: block;
	}
</style>
