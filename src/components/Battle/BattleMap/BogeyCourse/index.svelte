<script>
	import Bogey from '../Bogey.svelte';
	import fp from 'lodash/fp';
	import { coords2map } from '../utils';
	import Position from '../Bogey/Position.svelte';
	import { plot_movement } from '@aotds/aotds-battle';

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

	export let bogey = {};

	let course;
	$: course = plot_movement(bogey);

	let path = [];
	$: path = path_for(course.trajectory);
</script>

<g class="course">
	<path d={path} />
	<Bogey navigation={course} />
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
