const app = Vue.createApp({
  data() {
    return {
      name: "Output"
    }
  },
  methods: {
    alertMe() {
      alert("hi");
    },
    register(event) {
      this.name = event.target.value;

    }
  }
});
app.mount("#assignment");