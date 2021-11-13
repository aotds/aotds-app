<script>
	import { dux } from '@aotds/aotds-battle';

	import General from './General.svelte';

	export let battle = {};
	export let entry = {};

	$: shipName = (id) => dux.selectors.bogey(battle)(id).name;

	$: orders = Object.entries(entry.payload.orders);
	$: ship = shipName(entry.payload.bogeyId);

	$: weaponName = (weaponId) => {
		const weapon =
			battle.bogeys[entry.payload.bogeyId].weaponry.weapons[weaponId];

		return [weapon.weaponType, weapon.weaponClass].join('-');
	};
</script>

{#each orders as [weaponId, { fireconId }] (weaponId)}
	<div>
		{ship} assigns {weaponName(weaponId)} to firecon {fireconId}.
	</div>
{/each}

<style>
</style>
