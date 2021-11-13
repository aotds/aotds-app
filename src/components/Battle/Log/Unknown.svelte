<script>
	export let entry = {};
</script>

<div>
	-> <span>{entry.type}</span>
	{JSON.stringify(entry.payload)}
	<br />
	{JSON.stringify(entry.subactions)}
</div>

<style>
	span {
		font-weight: bold;
	}
</style>
