<script setup>
import { storeToRefs } from "pinia";

import { useCount } from "./store/count";

const useCountStore = useCount();
/* console.log(useCountStore);
console.log(useCountStore.count); */

//! state disindaki ref veya reactive olmayan seyler destucture yapilabilir
//! getters also has to be called with storeToRefs
const { getCount, doubleCount } = storeToRefs(useCountStore);
const { add, desc, reset } = useCountStore;
</script>

<template>
  <div>{{ getCount }}</div>
  <div>{{ doubleCount }}</div>
  <button @click="add(5)">Add</button>
  <button @click="desc">Desc</button>
  <button @click="reset">Reset</button>
</template>

<style scoped></style>
