<script>
	import Bogey from './Bogey.svelte';
	import { coords2map } from './utils';
	import { plotMovement } from '@aotds/aotds-battle';

	function path_for(trajectory = []) {
		return (
			'M ' +
			trajectory
				.map((p) => p.coords)
				.filter((p) => p)
				.map(coords2map)
				.map((c) => c.join(','))
				.join(' L ')
		);
	}

	export let thrust = 0;
	export let turn = 0;
	export let bank = 0;

	/** position of the ship */
	export let coords = [0, 0];
	export let heading = 0;
	export let velocity = 0;
	export let drive = 0;

	$: course = plotMovement({
		navigation: { coords, heading, velocity },
		orders: { navigation: { turn, thrust, bank } },
		drive: { current: drive },
	});

	let path = [];
	$: path = path_for(course.trajectory);
</script>

<g class="course">
	<path d={path} />
	<Bogey {...course} />
</g>

<style>
	g {
		opacity: 0.5;
	}
	path {
		stroke: red;
		stroke-width: 3px;
		fill: none;
	}
</style>
