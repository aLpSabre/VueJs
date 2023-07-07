<template>
  <div v-if="alert">
    <dialog open>
      <h1>Alert</h1>
      <button @click="close">Okay</button>
    </dialog>
  </div>
</template>

<script>
export default {
  props: ['alert'],
  data() {
    return {};
  },
  emits:['close-dialog'],
  methods: {
    close() {
      this.$emit('close-dialog')
    },
  },
};
</script>
