<script>
	import { dux } from '@aotds/aotds-battle';

	import General from './General.svelte';
	import Subactions from './Subactions.svelte';

	export let battle = {};
	export let entry = {};

	let weapon;
	$: {
		let w =
			battle.bogeys[entry.payload.bogeyId].weaponry.weapons[
				entry.payload.weaponId
			];

		weapon = [w.weaponType, w.weaponClass].join('-');
	}
</script>

<div>
	{weapon} powers up...

	<Subactions subactions={entry.subactions} {battle} />
</div>
