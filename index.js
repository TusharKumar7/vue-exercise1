const app = Vue.createApp({
  data() {
    return {
      name: "John Cena",
      address: "street no. 123, Shibuya, Japan",
      dob: "2000-09-11",
      age: null,
      isValid: false,
      ageValidation: false,
      users: [
        { name: `Rahul`, age: 24, imgUrl: "./assets/img1.webp" },
        { name: `Rohit`, age: 20, imgUrl: "./assets/img2.webp" },
        { name: `Jack`, age: 18, imgUrl: "./assets/img3.webp" },
      ],
    };
  },
  methods: {
    calculateAge() {
      const age = Math.floor((new Date() - new Date(this.dob).getTime()) / 3.15576e+10)
      this.age = age;
    },
    validateAge() {
      this.ageValidation = true;
      this.isValid = this.age < 18 ? false : true;
    },
  },
});

app.mount("#app");
