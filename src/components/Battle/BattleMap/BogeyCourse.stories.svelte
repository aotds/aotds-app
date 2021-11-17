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
			{...args}
			coords={[args.x, args.y]}
			thrust={args.thrust}
			turn={args.turn}
			bank={args.bank}
			drive={6}
			heading={args.heading}
		/>
		<Bogey
			{...args}
			coords={[args.x, args.y]}
			heading={args.heading}
			on:selectBogey={args.select}
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
