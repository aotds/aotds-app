import { writable } from "svelte/store";
//import { plotMovement } from "@aotds/aotds-battle";

const store = writable(null);

export default store;

// export async function fetch() {
//   let battle = await fetch("/api/battle/" + this.name).then((res) =>
//     res.json()
//   );

//   battle = u.updateIn(
//     "bogeys",
//     u.map((bogey) =>
//       u.updateIn("navigation.course", u.constant(plotMovement(bogey)), bogey)
//     ),
//     battle
//   );

//   store.set(battle);

//   return battle;
// }
