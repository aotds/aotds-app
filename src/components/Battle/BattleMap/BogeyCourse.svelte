<script>
	import _ from 'lodash';
	import u from 'updeep';

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

	export let bogey = {};

	console.log(bogey);
	$: course = plotMovement(bogey);

	$: path = path_for(course.trajectory);

	$: console.log(course);

	$: courseBogey = u({ navigation: course }, bogey);
</script>

<g class="course">
	<path d={path} />
	<Bogey bogey={courseBogey} />
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
