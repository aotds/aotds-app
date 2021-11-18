<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import BattleMap from './BattleMapPanZoom.svelte';
	import { dux } from '@aotds/aotds-battle';

	const bogeys = Object.values(
		dux.subduxes.bogeys.inflate([
			{
				id: 'enkidu',
				navigation: { coords: [0, 0], heading: 1, velocity: 2 },
				weaponry: { weapons: [] },
			},
			{
				id: 'siduri',
				navigation: { coords: [10, 5], heading: 6, velocity: 0 },
				weaponry: { weapons: [] },
			},
		]),
	);
</script>

<Meta title="BattleMap" component={BattleMap} argTypes={{}} />

<Template let:args>
	<BattleMap {bogeys} />
</Template>

<Story name="Primary" args={{}} />

<style>
</style>
