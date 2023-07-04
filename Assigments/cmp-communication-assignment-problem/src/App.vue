<template>
  <div>
    <active-user @submit-data="submitData"  ></active-user>
    <div>
      <user-data
        v-for="user in userData"
        :key="user.name"
        :name="user.name"
        :age="user.age"
      ></user-data>
    </div>
  </div>
</template>

<script>
import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";

export default {
  components: { UserData, ActiveUser },

  data() {
    return {
      userData: [
        { name: "Ali", age: "25" },
      ],
    };
  },
  methods: {
    submitData(name, age) {
      this.userData.push({ name, age });
    },
  },
};
</script>
