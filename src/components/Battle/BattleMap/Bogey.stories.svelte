<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Bogey from './Bogey.svelte';
</script>

<Meta
	title="Bogey"
	component={Bogey}
	argTypes={{
		x: { type: 'number', defaultValue: 0 },
		y: { type: 'number', defaultValue: 0 },
		select: { action: 'select' },
		id: { defaultValue: 'enkidu', type: 'string' },
	}}
/>

<Template let:args>
	<svg viewBox="-200 -200 400 400">
		<Bogey
			{...args}
			bogey={{
				navigation: {
					coords: [args.x, args.y],
				},
			}}
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
