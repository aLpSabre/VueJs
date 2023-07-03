<template>
  <form action="">
    <input type="text" name="" id="" v-model="userName" />
    <input type="tel" name="" id="" v-model="userTel" />
    <input type="email" name="" id="" v-model="userEmail" />
    <button @click.prevent="friendAdded">Add Friend</button>
  </form>
</template>

<script>
export default {
  props:["friends"],
  data() {
    return {
      userName:"",
      userTel:"",
      userEmail:""
    };
  },
  emit: ["friendAdded"],
  methods: {
    friendAdded() {
      this.$emit("friendAdded", this.userName, this.userTel, this.userEmail);
      this.userName = "";
      this.userTel = "";
      this.userEmail = "";
      console.log(this.friends);
    },
  },
};
</script>
