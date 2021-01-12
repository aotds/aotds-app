import { writable, derived, get } from "svelte/store";
import _ from 'lodash';
import u from '@yanick/updeep';
//import { plotMovement } from "@aotds/aotds-battle";

export default class BattleStore {
  constructor() {
    this.store = writable(null);

    this.selected_bogey = writable(null);

    const seed_bogey = () => _.get(get(this.store), "bogeys.0", null);

      console.log(this.store);
    this.store.subscribe(($battle) => {
      const selected = get(this.selected_bogey);
      if (_.find(_.get($battle, "bogeys", []), { id: selected })) return;

      this.selected_bogey.set(_.get(seed_bogey(), "id", null));
    });

    this.bogeys = derived(
      [this.store, this.selected_bogey],
      ([$battle, $selected_bogey], set) => {
        set(
          _.get($battle, "bogeys", []).map(
            u.if(_.matches({ id: $selected_bogey }), { selected: true })
          )
        );
      }
    );
  }

  set(battle) {
    return this.store.set(battle);
  }

  select_bogey(id) {
    this.selected_bogey.set(id);
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
