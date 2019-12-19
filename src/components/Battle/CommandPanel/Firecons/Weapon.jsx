import React from 'react';

export default function Weapon({weapon}) {
return <div>
      { weapon.type } { weapon.class }
</div>;
}


/*
<template>
  <Drag
    effect-allowed="move"
    drop-effect="move"
    @dragstart="is_dragged = true"
    @dragend="is_dragged = false"
    :transferData="{ bogey_id: this.bogey_id, weapon_id: this.weapon.id }"
  >
    <div
      :class="[{ is_dragged: this.is_dragged }]"
      @mouseenter="mouseenter"
      @mouseleave="mouseleave"
    >
    </div>
  </Drag>
</template>

<script>
import { Drag } from "vue-drag-drop";

export default {
  props: ["bogey_id", "weapon"],
  data() {
    return {
      is_dragged: false
    };
  },
  components: { Drag },
  computed: {},
  filters: {},
  methods: {
    mouseenter() {
      console.log("mouse over");
      this.$emit("show_firing_arc", [this.bogey_id, this.weapon.id]);
    },
    mouseleave() {
      console.log("mouse leaving");
      this.$emit("hide_firing_arc", [this.bogey_id, this.weapon.id]);
    }
  }
};
</script>

<style scoped>
.is_dragged {
  color: gray;
}
</style>

*/
