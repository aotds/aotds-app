<script>
	import { findLast } from 'lodash/fp';
	import { dux } from '@aotds/aotds-battle';

	import '../../../static/fonts/dosis/dosis.css';
	import '../../../static/fonts/faktos.css';
	import '../../../static/fonts/SciFly-Sans.css';
	import Unknown from './Log/Unknown.svelte';
	import General from './Log/General.svelte';
	import MovementPhase from './Log/MovementPhase.svelte';

	export let battle = {};
	export let log = [];

	const actionMap = {
		movementPhase: MovementPhase,
	};

	$: turnLog = findLast(
		{ type: 'playTurn' },
		dux.selectors.orderedLog(battle),
	);

	$: turn = battle.game.turn;
	// scale 1.125
	// 1 1.13 1.27  1.42 1.60 1.8
	// 1rem = 16pt
	// lineheight= 20px
</script>

<div>
	<h2>Turn {turn}</h2>
	{#each turnLog.subactions as entry (entry)}
		<General {entry} {battle} />
	{/each}
</div>

<style>
	div {
		font-family: Dosis;
		line-height: 1.25rem;
	}

	h2 {
		font-size: 1.42rem;
	}
	:global(h3) {
		font-size: 1.13rem;
		line-height: 1.25rem;
		margin-top: 0rem;
		margin-bottom: 0.25rem;
		margin-top: 1rem;
	}
</style>
