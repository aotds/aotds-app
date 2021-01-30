import { writable, derived, get } from "svelte/store";
import fp from "lodash/fp";
import _ from "lodash";
import u from "@yanick/updeep";
import { plot_movement } from "@aotds/aotds-battle";
import dux from "./battle/dux";
import { compose, applyMiddleware } from "redux";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export default function BattleStore() {
  const store = writable(null);

  const duxStore = dux.createStore({}, (mw) =>
    composeEnhancers(applyMiddleware(mw))
  );

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
      _.flow(
        fp.getOr([], "bogeys"),
        u.map(u.if(_.matches({ id: $selected_bogey }), { selected: true })),
        u.map((bogey) => {
          const course = plot_movement(bogey);
          return u(
            {
              navigation: { course },
              orders: { navigation: course.orders },
            },
            bogey
          );
        }),
        set
      )($battle);
    }
  );

  const selectBogey = selected_bogey.set;


  store.subscribe(($store) => console.log($store));

  const actions = _.mapValues(duxStore.actions, (fun) => (...args) =>
    duxStore.dispatch(fun(...args))
  );

  duxStore.subscribe(() => {
    store.set(duxStore.getState());
  });

  return {
    selectBogey,
    selected_bogey,
    bogeys,
    store,
    ...actions,
  };
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
