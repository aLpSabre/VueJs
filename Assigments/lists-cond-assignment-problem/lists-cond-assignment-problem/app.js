const app = Vue.createApp({
  data() {
    return {
      enteredInput: "",
      tasks: [],
      visibility:false

    }
  },
  computed:{
    buttonText(){
      return this.visibility ? "Show the List" : "Hide the List";
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