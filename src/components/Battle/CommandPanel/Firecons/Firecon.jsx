import React from 'react';

import { useDrop } from 'react-dnd';

import Weapon from './Weapon';
import classNames from '../../../../utils/classNames';
import './styles.css';

const Targets = ({ targets, target_id }) => (
  <div className="firecon_target">
    <select>
      <option value="">no target</option>
      {targets.map(target => (
        <option value={target.id} key={target.id}>
          {target.name}
        </option>
      ))}
    </select>
  </div>
);

const collect = monitor => ({
  hovered: monitor.isOver()
});

export default function Firecon({
  firecon_id,
  targets = [],
  target_id,
  weapons = [],
  onWeaponAssignment = () => {}
}) {
  const firecon_name = firecon_id >= 1 ? `Firecon ${firecon_id}` : 'Standby';
  const is_standby = firecon_id === undefined;

  const [collectedProps, drop] = useDrop({
    accept: 'weapon',
    collect,
    drop(item) {
      onWeaponAssignment({ weapon_id: item.id, firecon_id });
    }
  });

  return (
    <div
      ref={drop}
      {...classNames(['Firecon', { hovered: collectedProps.hovered }])}
    >
      <h2>{firecon_name}</h2>

      {!is_standby && <Targets targets={targets} target_id={target_id} />}

      <div className="weapons">
        {weapons.map(weapon => (
          <Weapon weapon={weapon} key={weapon.id} />
        ))}
      </div>
    </div>
  );
}

/*
<template>
  <Drop
    drop-effect="move"
    @drop="weapon_assign"
    @dragenter="dragged_over = true"
    @dragleave="dragged_over = false"
    :class="{ dragged_over: this.dragged_over }"
  >
    <span @mouseover="show_all_firing_arcs" @mouseleave="hide_all_firing_arcs">
      {{ firecon_name }}</span
    >

    <div class="firecon_target" v-if="!standby">
      <select v-model="target" @change="select_target">
        <option value="">no target</option>
        <option v-for="target in targets" :value="target.id">
          {{ target.name }}
        </option>
      </select>
    </div>

  </Drop>
</template>

<script>
import { Drop } from "vue-drag-drop";

export default {
  props: {
    firecon_id: { required: false, type: Number },
    weapons: { default: () => [] },
    bogey_id: { required: true },
    targets: { default: () => [] },
    target_id: {
      default: ""
    }
  },
  data() {
    return { target: this.$props.target_id, dragged_over: false };
  },
  components: { Drop },
  computed: {
    firecon_name() {
      return !this.standby ? `Firecon ${this.firecon_id}` : "Standby";
    },
    standby() {
      return !this.firecon_id;
    }
  },
  filters: {},
  methods: {
    weapon_assign(e) {
      console.log(e);
      this.dragged_over = false;
      this.$emit("assign_weapon", {
        ...e,
        firecon_id: this.firecon_id
      });
    },
    select_target({ target: { value: target_id } }) {
      this.$emit("select_target", {
        bogey_id: this.bogey_id,
        firecon_id: this.firecon_id,
        target_id
      });
    },
    show_all_firing_arcs() {
      this.$emit("show_all_firing_arcs", this.bogey_id);
    },
    hide_all_firing_arcs() {
      this.$emit("show_all_firing_arcs", this.bogey_id);
    }
  }
};
</script>

<style scoped>
.weapons {
  min-height: 3em;
}
.dragged_over {
  background-color: pink;
}
</style>
    */
