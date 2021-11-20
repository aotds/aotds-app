---
to: <%= name.replace( /(.*)\.(.*)/, (_,pre,suf) => pre + '.stories.' + suf ) %>
---
<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import <%= component %> from './<%= component %>.svelte';
</script>

<Meta
	title="<%= component %>"
	component={ <%= component %> }
	argTypes={{
	}}
/>

<Template let:args>
	<<%= component %> />
</Template>

<Story name="Primary" args={{}} />

<style>
</style>
