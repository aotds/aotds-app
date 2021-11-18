<script>
	import _ from 'lodash';

	export let bogey;

	$: coords = _.get(bogey, 'navigation.coords', [0, 0]);
	$: heading = _.get(bogey, 'navigation.heading', 0);

	export let selected = false;

	/** @type {string} */
	export let id;

	import Position from './Bogey/Position.svelte';
	import { createEventDispatcher, getContext } from 'svelte';

	const battle = getContext('battle');

	export let radar = false;

	const dispatch = createEventDispatcher();

	let select;
	$: select = () => dispatch('selectBogey', id);
</script>

<Position {coords} {heading}>
	<use
		on:click={select}
		class="bogey"
		class:selected
		href="/svg/ship/generic.svg#ship_generic"
		transform="scale(0.4)"
	/>
</Position>

<style>
	.bogey {
		fill: white;
	}
	.selected {
		stroke: red;
	}
</style>
