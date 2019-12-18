<template>
  <v-slider
    :label="label"
    :min="min"
    :max="max"
    :value="value"
    @change="change"
  />
</template>

<script>
export default {
  props: {
    label: { required: true },
    min: { required: true },
    max: { required: true },
    value: { required: true }
  },
  components: {},
  computed: {},
  filters: {},
  methods: {
    change(value) {
      this.$emit("change", {
        [this.label]: value
      });
    }
  }
};
</script>

<style scoped></style>
