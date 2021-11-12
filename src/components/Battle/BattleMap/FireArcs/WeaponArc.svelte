<script>
	import { map_scale } from '../utils';
	import { plotArc } from './utils';

	export let weaponClass;
	export let arc;

	let range = [];
	$: range = Array.from({ length: weaponClass }, (_, i) =>
		plotArc(arc, map_scale(12 * (i + 1))),
	);
	range.reverse();
</script>

{#each range as d (d)}
	<path {d} />
{/each}

<style>
	path {
		fill: red;
		stroke: none;
		opacity: 0.4;
	}
</style>
