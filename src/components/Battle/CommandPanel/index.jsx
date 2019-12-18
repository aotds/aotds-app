import React from 'react';
import Structure from "./Structure";
import fp from 'lodash/fp';

const Todo = () => <div>Todo</div>;

export default function CommandPanel({bogey}) {

    const orders_sent = fp.getOr(false,'orders.issued',bogey);
    const send_orders = () => { console.log("sending orders") };

    return <div>
    <h1>{ bogey.name || bogey.id }</h1>

        <Structure {...bogey.structure} />

        <input type="button"
            value={ orders_sent ? "orders sent" : "send orders" }
                disabled={ orders_sent}
            onClick={send_orders}
        />

        </div>;
}
/*
<template>

    <Navigation
      :drive="bogey.drive"
      :orders="order_nav"
      :navigation="bogey.navigation"
        @orders_change="orders_change"
    />

    <Firecons :bogey_id="bogey.id" v-bind="weaponry" />
  </div>
</template>

<script>
import Firecons from "./Firecons";
import Navigation from "./Navigation";

import fp from "lodash/fp";
import { useBattle } from '../../../hooks/battle';

export default {
  name: "CommandPanel",
  props: {
    bogey: { required: true },
    bogeys: { default: () => [] }
  },
  components: { Firecons, Navigation, Structure },
  computed: {
    order_nav() {
      return fp.getOr({}, "bogey.orders.navigation", this);
    },
    weaponry() {
      return this.bogey.weaponry;
    },
    orders_sent() {
      return fp.get("bogey.orders.issued")(this);
    },
    order_button_label() {
      return this.orders_sent ? "orders sent" : "send orders";
    }
  },
  filters: {},
  methods: {
    send_orders() {
      this.$emit("send_orders", this.bogey.id, fp.get("bogey.orders", this));
    }
  },
    setup({bogey}) {
        const { add_bogey_orders } = useBattle();

        console.log("???", bogey);

        return {
            orders_change(change) {
                console.log(change);
                add_bogey_orders(bogey.id,{ navigation: change });
            }
        }
    }
};
</script>

<style scoped></style>
*/
