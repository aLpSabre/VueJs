
import { defineStore } from 'pinia'
import { ref, computed } from "vue"
export const useCount = defineStore("count", () => {
  const count = ref(0);
  //! call it with count.value because it is a ref 
  const getCount = computed(() => count.value)
  const doubleCount = computed(() => { return getCount.value + 2 });
  function add(add) {
    console.log("add");
    count.value = count.value + add;
  }
  function desc() {
    count.value--;
  }
  function reset() {
    console.log("rest");
    add(1);
  }
  return {
    count,
    getCount,
    add,
    desc,
    reset,
    doubleCount

  }
}
);