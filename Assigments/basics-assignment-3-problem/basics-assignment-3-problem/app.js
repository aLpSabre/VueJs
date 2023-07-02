const app = Vue.createApp({

  data() {
    return {
      count: 0,

    }
  },
  watch: {
    // v-once only executes one time 
    // result(newValue,oldValue)
    result(value) {
      /*  const that = this; */
      setTimeout(() => {
        this.count = 0;
      }, 5000)

    }
  },
  computed: {

    result() {
      if (this.count == 0) {

        return "0"
      }
      else if (this.count < 37 && this.count !== 0) {

        return "Not there yet!"
      } else if (this.count > 37) {
        return "Too much";
      }
      return "37";
    }

  }

});
app.mount("#assignment");