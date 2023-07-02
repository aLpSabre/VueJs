const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      visibilty: true,
      backgroundUser:""
    }

  },
  computed: {

  },
  methods: {

    changeV() {
      this.visibilty = !this.visibilty
    }

  }
});
app.mount("#assignment");