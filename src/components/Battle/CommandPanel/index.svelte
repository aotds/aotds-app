<script>
  import fp from 'lodash/fp';
  import _ from 'lodash';
  import { getContext } from 'svelte';
  import { relativeCoords } from '@aotds/aotds-battle';

  import Structure from './Structure.svelte';
  import Navigation from './Navigation/index.svelte';
  import Firecons from './Firecons/index.svelte';

  export let bogey = null;


  const { setNavigationOrder, bogeys } = getContext('battle');
  const battle = getContext('battle');


  let orders_sent;
  $: orders_sent = fp.getOr(false, 'orders.issued', bogey);

  const send_orders = () => {};

  let navigation_orders;
  $: navigation_orders = fp.getOr({}, 'orders.navigation', bogey);

  let shields, hull;
  $: shields = _.get( bogey, 'weaponry.shields', [] );
  $: hull = _.get( bogey, 'structure.hull', undefined);
  $: armor = _.get(bogey, 'structure.armor', undefined );

  let firecons, weapons;
  $: firecons = _.get(bogey,'weaponry.firecons',[]);
  $: weapons  = _.get(bogey,'weaponry.weapons', []);

  const handle_navigation_order = ({detail}) => {
    setNavigationOrder({bogey_id: bogey.id,order: detail})
  };

  let targets = [];

  $: targets = _.sortBy($bogeys.filter(
    ({player_id}) => player_id !== bogey.player_id
  ).map(
    b => ({
      ...b,
      distance: relativeCoords(bogey.navigation,b.navigation)
    })
  ), 'distance' );

  const setFireconTarget = ({detail}) =>
    battle.setFireconTarget({
      bogey_id: bogey.id,
      ...detail
    });

  const assignWeaponToFirecon = ({detail}) =>
    battle.assignWeaponToFirecon({
      bogey_id: bogey.id,
      weapon_id: parseInt(detail.weapon_id),
      firecon_id: parseInt(detail.firecon_id),
    });


</script>

<div>
  <h1>{bogey.name}</h1>

  <Structure {shields} {hull} {armor} />

  <input
    type="button"
    value={orders_sent ? 'orders sent' : 'send orders'}
    disabled={orders_sent}
    on:click={send_orders} />

  <Navigation
    on:set_navigation_order={handle_navigation_order}
    drive={bogey.drive}
    orders={navigation_orders}
    navigation={bogey.navigation} />

  <Firecons {firecons} {weapons} {targets}
    on:assignWeaponToFirecon={assignWeaponToFirecon}
    on:setFireconTarget={setFireconTarget}
  />

</div>
<style>
  div {
    max-width: 350px;
  }
</style>
