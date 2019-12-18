<template>
  <fieldset>
    <legend>Navigation</legend>

    <Drive v-bind="drive" :thrust_used="thrust_used" />

    <NavItem
      v-for="elt in ['thrust', 'turn', 'bank']"
      v-if="navigation.maneuvers && navigation.maneuvers[elt]"
      :label="elt"
      :key="elt"
      :min="navigation.maneuvers[elt][0]"
      :max="navigation.maneuvers[elt][1]"
      :value="orders[elt]"
      @change="v => nav_change(elt, v)"
    />
  </fieldset>
</template>

<script>
import fp from "lodash/fp";

import Drive from "./Drive";
import NavItem from "./NavItem";

/**
 * @example ./navigation.md
 */
export default {
  name: "Navigation",
  props: {
    drive: { required: true },
    orders: {
      default: () => ({})
    },
    navigation: {}
  },
  components: { Drive, NavItem },
  computed: {
    thrust_used() {
      return fp.getOr(0, "navigation.course.thrust_used", this);
    }
  },
  filters: {},
  methods: {
    nav_change(elt, value) {
      this.$emit("orders_change", {
        navigation: { [elt]: value }
      });
    }
  },
};
</script>

<style scoped></style>
