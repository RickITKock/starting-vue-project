const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      fullname: "",
      lastName: "",
    };
  },
  // computed: {
  //   // fullName() {
  //   //   console.log("Running computed");
  //   //   if (this.name === "") {
  //   //     return "Anonymous";
  //   //   }
  //   //   return this.name + " " + "Kock";
  //   // },
  // },
  watch: {
    name(value) {
      if (value === "") {
        this.fullname = "";
      } else {
        this.fullname = value + " " + this.lastName;
      }
    },
    lastName(value) {
      if (value === "") {
        this.fullname = "";
      } else {
        this.fullname = this.name + " " + value;
      }
    },
  },
  methods: {
    add() {
      this.counter++;
    },
    reduce() {
      this.counter--;
    },
    confirmInput() {
      this.name = "Changed name";
    },
    setName(event) {
      this.name = event.target.value;
    },
    submitForm(event) {
      alert(this.name);
    },
    resetInput(event) {
      this.name = "";
      this.lastName = "";
    },
  },
});

app.mount("#events");
