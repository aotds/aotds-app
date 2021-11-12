<script>
	import Position from '../Bogey/Position.svelte';
	import WeaponArc from './WeaponArc.svelte';

	export let coords = [0, 0];
	export let weapons = [];
	export let heading = 0;
</script>

<Position {coords} {heading}>
	{#each weapons as weapon (weapon.id)}
		{#if weapon.showArcs}
			{#each weapon.arcs || [] as arc (arc)}
				<WeaponArc weaponClass={weapon.weaponClass} {arc} />
			{/each}
		{/if}
	{/each}
</Position>

<style>
</style>
