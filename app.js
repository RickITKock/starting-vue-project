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
    setName(event) {
      this.name = event.target.value;
    },
    submitForm(event) {
      alert(this.name);
    },
    resetInput(event) {
      this.name = "";
    },
  },
});

app.mount("#events");
