<template>
  <div>
    <resource
      v-for="resource in myResources"
      :key="resource.title"
      :id="resource.id"
      :title="resource.title"
      :desc="resource.desc"
      :link="resource.link"
    ></resource>
  </div>
</template>

<script>
import Resource from './Resource.vue';
export default {
  components: { Resource },
  inject: ['myResources'],
  data() {
    return {};
  },
  methods: {},
};
</script>
