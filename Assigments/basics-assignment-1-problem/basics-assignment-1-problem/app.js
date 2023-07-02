const app = Vue.createApp({
  data: function () {
    return {
      name: "Muhammed Ubeyde Alpkilic",
      age: 28,
      ageCalc: 28 + 5,
      favNum: Math.random(),
      imageUrl: "https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509_1280.jpg",
      enteredValue: "Muhammed Ubeyde Alpkilic",
      imageHTML: '  <img src="https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_640.jpg" />'

    }
  },
  methods: {
    calcAge() {
      return this.age + 5;
    },
    changeName() {

      return this.enteredValue;
    }
  }
});

app.mount("body");