const app = Vue.createApp({
  data() {
    return {
      enteredGoal: "",
      message: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoal);
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
    setMessage() {
      this.message = this.$refs.message.value;
      console.dir(this.$refs.message);
    },
  },
});

app.mount("#user-goals");
