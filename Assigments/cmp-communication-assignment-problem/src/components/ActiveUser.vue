<template>
  <div>
    <input type="text" name="" id="" v-model="name" />
    <input type="text" name="" id="" v-model="age" />
    <button @click="submitData">Submit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("submit-data", this.name, this.age);
      this.name="";
      this.age="";
    },
  },
};
</script>
