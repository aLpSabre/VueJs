<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <button @click="activeTopic(id)">Learn More</button>
  </li>
</template>

<script>
export default {
  inject:["activeTopic"],
  props: ['id', 'topicName', 'description'],
  emits: ['select-topic'],
};
</script>