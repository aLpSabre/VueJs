<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button>Load Submitted Experiences</base-button>
      </div>
      <ul v-if="results && results.length">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
      <p v-else>No submitted data</p>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  props:["results"],
  data() {
    return {
     
    };
  },
  watch:{
    results(value){
      console.log("resultValue",value);
  
    }
  },
  components: {
    SurveyResult,
  },
  mounted(){
    console.log("list mount")
  /*   console.log(this.results) */
  }
  
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
