import { writable, derived, get } from "svelte/store";
import _ from 'lodash';
import u from '@yanick/updeep';
//import { plotMovement } from "@aotds/aotds-battle";

export default function BattleStore() {
    const store = writable(null);

    const selected_bogey = writable(null);

    const seed_bogey = () => _.get(get(store), "bogeys.0", null);

    store.subscribe(($battle) => {
      const selected = get(selected_bogey);
      if (_.find(_.get($battle, "bogeys", []), { id: selected })) return;

      selected_bogey.set(_.get(seed_bogey(), "id", null));
    });

    const bogeys = derived(
      [store, selected_bogey],
      ([$battle, $selected_bogey], set) => {
        set(
          _.get($battle, "bogeys", []).map(
            u.if(_.matches({ id: $selected_bogey }), { selected: true })
          )
        );
      }
    );

  const select_bogey = selected_bogey.set;

  return {
      select_bogey,
      selected_bogey,
      bogeys,
      store,
  }
}

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
