<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Log from './Log.svelte';
	import { turn2, turn3 } from './Log/sampleTurn';
</script>

<Meta title="Turn log" component={Log} argTypes={{}} />

<Template let:args>
	<div>
		<Log {...args} />
	</div>
</Template>

<Story name="Turn 3" args={{ battle: turn3, log: turn3.log }} />
<Story name="Turn 2" args={{ battle: turn2, log: turn2.log }} />

<style>
</style>
