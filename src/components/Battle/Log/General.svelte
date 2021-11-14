<script>
	import Unknown from './Unknown.svelte';
	import movementPhase from './MovementPhase.svelte';
	import bogeyMovementResolution from './BogeyMovementResolution.svelte';
	import fireconOrdersPhase from './FireconOrdersPhase.svelte';
	import weaponOrdersPhase from './WeaponOrdersPhase.svelte';
	import bogeyFireconsOrders from './BogeyFireconsOrders.svelte';
	import clearOrders from './ClearOrders.svelte';
	import weaponFiringPhase from './WeaponFiringPhase.svelte';
	import bogeyWeaponsOrders from './BogeyWeaponsOrders.svelte';
	import fireFirecon from './FireFirecon.svelte';
	import fireWeapon from './FireWeapon.svelte';
	import fireWeaponOutcome from './FireWeaponOutcome.svelte';
	import bogeyDamage from './BogeyDamage.svelte';

	export let battle = {};
	export let entry = [];

	const actionMap = {
		bogeyDamage,
		fireWeaponOutcome,
		fireWeapon,
		fireFirecon,
		movementPhase,
		bogeyMovementResolution,
		fireconOrdersPhase,
		weaponOrdersPhase,
		bogeyFireconsOrders,
		clearOrders,
		weaponFiringPhase,
		bogeyWeaponsOrders,
	};
</script>

<svelte:component this={actionMap[entry.type] || Unknown} {entry} {battle} />

<style>
</style>
