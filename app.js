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
      // console.dir(this.$refs.message);
    },
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
});

app.mount("#user-goals");

setTimeout(() => {
  app.unmount();
}, 3000);
