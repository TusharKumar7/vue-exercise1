const app = Vue.createApp({
  data() {
    return {
      name: "John Cena",
      address: "street no. 123, Shibuya, Japan",
      dob: "2000-09-11",
      age: null,
      isValid: false,
      showValidation: false,
      users: [
        { name: `Rahul`, age: 24, imgUrl: "./assets/img1.webp" },
        { name: `Rohit`, age: 20, imgUrl: "./assets/img2.webp" },
        { name: `Jack`, age: 18, imgUrl: "./assets/img3.webp" },
      ],
    };
  },
  methods: {
    calculateAge() {
      let dobDate = new Date(this.dob);
      let currentDate = new Date();
      let age = currentDate.getFullYear() - dobDate.getFullYear();
      if (currentDate.getMonth() < dobDate.getMonth() || 
        (currentDate.getMonth() === dobDate.getMonth() && currentDate.getDate() < dobDate.getDate())) {
        age--;
      }
      this.age = age;
    },
    validateAge() {
      this.showValidation = true;
      this.isValid = this.age < 18 ? false : true;
    },
  },
});

app.mount("#app");