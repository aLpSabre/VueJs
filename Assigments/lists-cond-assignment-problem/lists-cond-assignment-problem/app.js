const app = Vue.createApp({
  data() {
    return {
      enteredInput: "",
      tasks: [],
      visibility:false

    }
  },

  methods: {
    addTask() {
      this.tasks.push(this.enteredInput);
      this.enteredInput = "";
    },
    changeVisibility(){
      this.visibility=!this.visibility;
    }
  }
});

app.mount("#assignment");