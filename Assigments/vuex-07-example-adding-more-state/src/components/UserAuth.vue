<template>
  <button @click="changeAuth({isAuth:true})" v-if="!getAuth">Login</button>
  <button @click="changeAuth({isAuth:false})" v-else>Logout</button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['getAuth']),
  },
  methods: {
    ...mapActions(['changeAuth']),
  },
};
</script>
