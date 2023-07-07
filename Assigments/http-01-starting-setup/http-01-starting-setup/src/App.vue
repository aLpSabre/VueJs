<template>
  <div>
    <learning-survey @survey-submit="storeSurvey"></learning-survey>
    <user-experiences :results="results"></user-experiences>
    <alert :alert="alert" @close-dialog="close"></alert>
  </div>
</template>

<script>
import LearningSurvey from './components/survey/LearningSurvey.vue';
import UserExperiences from './components/survey/UserExperiences.vue';
import Alert from './components/survey/Alert.vue'

export default {
  components: {
    LearningSurvey,
    UserExperiences,
    Alert
  },
  data() {
    return {
      results: [],
      alert:false
    };
  },
  methods: {
    loadExperiences() {
      console.log('load experince');
      fetch('https://http-fce99-default-rtdb.firebaseio.com/surveys.json')
        .then((res) => {
          console.log(res)
          if(!res.ok){
            this.alert=true;
            console.log("ok")
          }
          return res.json();
        })
        .then((res) => {
            console.log(res);
          const results = [];
          for (const id in res) {
            /*   console.log(id); */
            results.push({
              id: id,
              name: res[id].name,
              rating: res[id].rating,
            });
            /*    console.log(results); */
            this.results = results;
          }
        }).catch(error => {
          console.log(error)
          this.alert=true;
        });
    },
    storeSurvey() {
      this.loadExperiences();
      console.log('storeSurvey');
    },
    close(){
      this.alert=false;
    }
  },
  mounted() {
    console.log('app mount');
    this.loadExperiences();
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
