import { writable, derived, get } from "svelte/store";
import fp from 'lodash/fp';
import _ from 'lodash';
import u from '@yanick/updeep';
import constant from '@yanick/updeep/dist/constant';
import { plot_movement } from "@aotds/aotds-battle";

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
          _.flow(
            fp.getOr([], 'bogeys'),
            u.map(
                u.if(_.matches({ id: $selected_bogey }), { selected: true })
            ),
            u.map(
                bogey => {
                    const course = plot_movement(bogey);
                    return u({
                        navigation: { course },
                        orders: { navigation: course.orders }
                    },bogey)
                }
            ),
              set
          )($battle);
      }
    );

  const select_bogey = selected_bogey.set;

   const set_navigation_order = (id,{type,value}) =>
        store.update( $store =>
            u.updateIn( 'bogeys',
                u.map( u.if(fp.matches({id}), bogey => {
                    bogey = u.updateIn(['orders','navigation',type], value, bogey);
                    const course = plot_movement(bogey);
                    return u({
                        navigation: { course },
                        orders: { navigation: course.orders }, // to restrict the command
                    },bogey)
                })),
                $store)

        )
   ;

   const setFireconTarget = ({bogey_id,firecon_id,target_id}) => {
       store.update( $store => {
           $store = u.updateIn('bogeys', u.map(
               u.if(
                   fp.matches({id: bogey_id}),
                    u.updateIn('weaponry.firecons',
                        u.map(u.if(fp.matches({id: firecon_id}),
                            u({ target_id })
                        )
                    )
               )
           ) ) )($store);
           $store = u.updateIn('bogeys', u.map(
               u.if(
                   fp.matches({id: bogey_id}),
                    u.updateIn('orders.firecons',
                        firecons => {
                            [
                            ...fp.reject({firecon_id}, firecons),
                                {firecon_id, target_id}
                            ]
                        }
                    )
               )
           ))($store);
           return $store;
       })

   };

   const assignWeaponToFirecon = ({bogey_id,firecon_id,weapon_id}) => {
       store.update( $store => {
           console.log("monk",{bogey_id,firecon_id,weapon_id});

           $store = u.updateIn('bogeys', u.map(
               u.if(
                   fp.matches({id: bogey_id}),
                    u.updateIn('weaponry.weapons',
                        u.map(u.if(fp.matches({id: weapon_id}),
                            u({ firecon_id })
                        )
                    )
               )
           ) ) )($store);
           $store = u.updateIn('bogeys', u.map(
               u.if(
                   fp.matches({id: bogey_id}),
                    u.updateIn('orders.weapons',
                        weapons =>
                            [
                            ...fp.reject({weapon_id}, weapons),
                                {firecon_id, weapon_id}
                            ]

                    )
               )
           ))($store);
           return $store;
       })
   }

    store.subscribe($store =>
        console.log($store)
    );
  return {
      setFireconTarget,
      assignWeaponToFirecon,
      select_bogey,
      selected_bogey,
      bogeys,
      store,
      set_navigation_order,
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
