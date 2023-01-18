const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
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
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    submitForm(event) {
      alert(this.name);
    },
  },
});

app.mount("#events");
