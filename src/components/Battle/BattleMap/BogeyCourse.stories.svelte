<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Bogey from './Bogey.svelte';
	import BogeyCourse from './BogeyCourse.svelte';
</script>

<Meta
	title="Bogey/BogeyCourse"
	component={BogeyCourse}
	argTypes={{
		x: { type: 'number', defaultValue: 0 },
		y: { type: 'number', defaultValue: 0 },
		thrust: { type: 'number', defaultValue: 2 },
		turn: { type: 'number', defaultValue: 0 },
		bank: { type: 'number', defaultValue: 0 },
		heading: { type: 'number', defaultValue: 0 },
	}}
/>

<Template let:args>
	<svg viewBox="-200 -300 400 400">
		<BogeyCourse
			bogey={{
				navigation: {
					coords: [args.x, args.y],
					heading: args.heading,
					velocity: 2,
				},
				orders: {
					navigation: {
						thrust: args.thrust,
						turn: args.turn,
						bank: args.bank,
					},
				},
				structure: { drive: { current: 6 } },
			}}
			{...args}
		/>
		<Bogey
			{...args}
			bogey={{
				navigation: {
					coords: [args.x, args.y],
					heading: args.heading,
				},
				orders: {
					navigation: {
						thrust: args.thrust,
						turn: args.turn,
						bank: args.bank,
					},
				},
				structure: { drive: { current: 6 } },
			}}
			{...args}
			}}
		/>
	</svg>
</Template>

<Story name="Primary" args={{}} />

<style>
	svg {
		width: 400px;
		height: 400px;
		background: black;
	}
</style>
