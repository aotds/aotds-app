<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

	import Bogey from '../Bogey.svelte';
	import BogeyFireArcs from './BogeyFireArcs.svelte';
</script>

<Meta
	title="Bogey/Firing Arcs"
	component={BogeyFireArcs}
	argTypes={{
		heading: {
			type: 'number',
			defaultValue: 0,
			description: 'ship heading',
		},
		coords: {
			defaultValue: [0, 0],
		},
		arcs: {
			defaultValue: ['F'],
			control: { type: 'inline-check' },
			options: ['F', 'FS', 'FP', 'AS', 'AP', 'A'],
		},
		weaponClass: { options: [1, 2, 3], control: 'select' },
		showArcs: { defaultValue: true, control: { type: 'boolean' } },
	}}
/>

<Template let:args>
	<svg viewBox="-1600 -1600 3200 3200">
		<BogeyFireArcs
			{...args}
			weapons={[
				{
					weaponClass: args.weaponClass,
					arcs: args.arcs,
					showArcs: args.showArcs,
				},
			]}
		/>
		<Bogey {...args} />
	</svg>
</Template>

<Story name="Primary" />

<style>
	svg {
		width: 400px;
		height: 400px;
		background: black;
	}
</style>
