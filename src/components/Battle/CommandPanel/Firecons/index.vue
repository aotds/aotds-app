<template>
  <fieldset>
    <legend>firecons</legend>

    <Firecon
      :bogey_id="bogey_id"
      v-for="firecon in firecons"
      :firecon_id="firecon.id"
      :key="firecon.id"
      :weapons="weapons_for(firecon.id)"
      :targets="targets"
      :target_id="firecon.target_id"
    />

    <Firecon :bogey_id="bogey_id" :weapons="weapons_for()" />
  </fieldset>
</template>

<script>
import Firecon from "./Firecon";

/**
 * @example ./firecons.md
 */
export default {
  name: "Firecons",
  components: { Firecon },
  props: {
    bogey_id: { required: true },
    firecons: { default: () => [] },
    weapons: { default: () => [] },
    targets: { default: () => [] }
  },
  computed: {},
  filters: {},
  methods: {
    weapons_for(id) {
      return this.weapons.filter(({ firecon_id }) => firecon_id === id);
    }
  }
};
</script>

<style scoped></style>
