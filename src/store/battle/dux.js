import Updux from "updux";
import u from "@yanick/updeep";
import { action as actionTS, payload } from "ts-action";
import { plot_movement } from "@aotds/aotds-battle";

const action = (name) => actionTS(name, payload());

const dux = new Updux({
  initial: {},
});

dux.addMutation(action("initBattle"), (battle) => () => battle);

dux.addMutation(
  action("setFireconTarget"),
  ({ bogey_id, firecon_id, target_id }) =>
    u({
      bogeys: u.mapWhen(
        { id: bogey_id },
        {
          weaponry: {
            firecons: u.mapWhen(
              { id: firecon_id },
              {
                target_id,
              }
            ),
          },
          orders: {
            firecons: u.mapWhenElse(
              { firecon_id },
              { target_id },
              { target_id, firecon_id }
            ),
          },
        }
      ),
    })
);

dux.addMutation(action("setNavigationOrder"), ({ bogey_id: id, order }) =>
  u({
    bogeys: u.mapWhen({ id }, (bogey) => {
      const course = plot_movement(
        u.updateIn("orders.navigation", order, bogey)
      );

      return u(
        {
          navigation: { course },
          orders: { navigation: course.orders },
        },
        bogey
      );
    }),
  })
);

dux.addMutation(
  action("assignWeaponToFirecon"),
  ({ bogey_id, firecon_id, weapon_id }) =>
    u({
      bogeys: u.mapWhen(
        { id: bogey_id },
        {
          weaponry: {
            weapons: u.mapWhen({ id: weapon_id }, { firecon_id }),
          },
          orders: {
            weapons: u.mapWhenElse(
              { weapon_id },
              { firecon_id },
              {
                weapon_id,
                firecon_id,
              }
            ),
          },
        }
      ),
    })
);

export default dux.asDux;
