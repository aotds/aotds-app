<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Structure from './Structure.svelte';
</script>

<Meta
	title="Bogey/Structure"
	component={Structure}
	argTypes={{
		hullRating: { type: 'number', defaultValue: 6 },
		hullCurrent: { type: 'number', defaultValue: 4 },
	}}
/>

<Template let:args>
	<Structure hull={{ current: args.hullCurrent, rating: args.hullRating }} />
</Template>

<Story name="Primary" args={{}} />

<style>
</style>
