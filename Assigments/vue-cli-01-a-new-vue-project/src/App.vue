<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <friend-contact></friend-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "manuel lorenz",
          phone: "01010101011",
          email: "ada",
        },
        {
          id: "manuel",
          name: "manuel lorenz",
          phone: "01010101011",
          email: "ada",
        },
        {
          id: "manuel",
          name: "manuel lorenz",
          phone: "01010101011",
          email: "ada",
        },
      ],
    };
  },
};
</script>
<style>

</style>