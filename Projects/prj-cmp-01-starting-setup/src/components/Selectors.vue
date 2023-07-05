<template>
  <div>
    <button
      @click="
        selectedControl();
        selectedShare();
      "
    >
      Stored Resources
    </button>
    <button
      @click="
        selectedControl();
        selectedShare();
      "
    >
      Add Resource
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: true,
    };
  },
  methods: {
    selectedControl() {
      this.selected = !this.selected;
    },
    selectedShare() {
      this.$emit('selected-share', this.selected);
    },
  },
};
</script>
