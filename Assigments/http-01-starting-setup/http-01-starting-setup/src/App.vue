<template>
  <div>
    <learning-survey @survey-submit="storeSurvey"></learning-survey>
    <user-experiences
      :results="results"
      :isLoading="isLoading"
    ></user-experiences>
    <alert :alert="alert" @close-dialog="close"></alert>
  </div>
</template>

<script>
import LearningSurvey from './components/survey/LearningSurvey.vue';
import UserExperiences from './components/survey/UserExperiences.vue';
import Alert from './components/survey/Alert.vue';

export default {
  components: {
    LearningSurvey,
    UserExperiences,
    Alert,
  },
  data() {
    return {
      results: [],
      alert: false,
      isLoading: true,
      isPosted: false,
    };
  },
  provide() {
    return {
      changeIsPosted: this.changeIsPosted
    };
  },
  watch: {
    isPosted(value) {
      value && this.loadExperiences();
    },
  },
  methods: {
    loadExperiences() {
      console.log('load experince');
      this.isLoading = false;
      this.isPosted=false;
      fetch('https://http-fce99-default-rtdb.firebaseio.com/surveys.json')
        .then((res) => {
          /*  console.log(res); */
          if (!res.ok) {
            this.alert = true;
            /*   console.log("ok") */
          }
          return res.json();
        })
        .then((res) => {
          console.log(res, 'response');
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
            this.isLoading = true;
          }
        })
        .catch((error) => {
          this.isLoading = false;
          console.log(error);
          this.alert = true;
        });
    },
    storeSurvey() {
      /*   console.log('isPosted', isPosted);
      isPosted && this.loadExperiences(); */
      console.log('storeSurvey called');
    },
    close() {
      this.alert = false;
    },
    changeIsPosted() {
      this.isPosted = true;
    },
  },

  mounted() {
    console.log('app mount');
    console.log('load experince in mounted');
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
<!-- setTimeout(() => {
  fetch('https://http-fce99-default-rtdb.firebaseio.com/surveys.json')
    .then((res) => {
      /*  console.log(res); */
      if (!res.ok) {
        this.alert = true;
        /*   console.log("ok") */
      }
      return res.json();
    })
    .then((res) => {
      console.log(res, 'response');
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
        this.isLoading = true;
      }
    })
    .catch((error) => {
      this.isLoading = false;
      console.log(error);
      this.alert = true;
    });
}, 1000); -->
