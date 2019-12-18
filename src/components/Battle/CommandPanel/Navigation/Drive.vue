<template>
  <div class="drive">
    drive: {{ thrust_used }} / {{ current }}
    <div class="bar">
      <v-progress-linear :value="(100 * thrust_used) / current" color="blue" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    current: { required: true },
    thrust_used: { default: 0, type: Number }
  },
  components: {},
  computed: {},
  filters: {}
};
</script>

<style scoped>
.bar {
  width: 10em;
  display: inline-block;
}
</style>
