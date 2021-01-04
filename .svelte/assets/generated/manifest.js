import * as layout from "/_app/assets/components/layout.svelte";

const components = [
	() => import("/_app/routes/index.svelte"),
	() => import("/_app/routes/battle/[battle_id].svelte"),
	() => import("/_app/routes/wip/CommandPanel/Firecons.svelte"),
	() => import("/_app/routes/wip/CommandPanel.svelte"),
	() => import("/_app/routes/wip/BattleMap.svelte")
];

const d = decodeURIComponent;
const empty = () => ({});

export const pages = [
	{
		// index.svelte
		pattern: /^\/$/,
		params: empty,
		parts: [components[0]]
	},

	{
		// battle/[battle_id].svelte
		pattern: /^\/battle\/([^/]+?)\/?$/,
		params: (m) => ({ battle_id: d(m[1])}),
		parts: [components[1]]
	},

	{
		// wip/CommandPanel/Firecons.svelte
		pattern: /^\/wip\/CommandPanel\/Firecons\/?$/,
		params: empty,
		parts: [components[2]]
	},

	{
		// wip/CommandPanel.svelte
		pattern: /^\/wip\/CommandPanel\/?$/,
		params: empty,
		parts: [components[3]]
	},

	{
		// wip/BattleMap.svelte
		pattern: /^\/wip\/BattleMap\/?$/,
		params: empty,
		parts: [components[4]]
	}
];

export const ignore = [
	
];

export { layout };