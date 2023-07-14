<template>
  <h2>My Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="isShow">{{ myGoal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="setShow">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
import { reactive } from 'vue';
export default {
  setup() {
    /*const myCourseGoal = ref('My goal');
    const isShow = ref(true); */
    // isReactive and isRef
    //toRefs to make refs of reactive properties
    const data = reactive({
      myGoal: 'it is my goal',
      isShow: true,
    });
/*     const dataRefs = toRefs(data);
 */    // in the function change the data 
    // use toRefs to be able to get the value of object seperatly and change the data 
    // if you only pass the property as a value than the changes will be not reflected on the temp 
    function setShow() {
      console.log("setshow");
      data.isShow = !data.isShow;
      console.log(data.isShow);
    }
    // if you pass the values like this it does not get reflected by the changes sadece valuelari paylasmak yeterli degil ref ya da reactive paylasmak gerekiyor
    return {
      isShow: data.isShow,
      myGoal: data.myGoal,
      setShow,
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
