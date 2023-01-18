const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish the course and learn Vue!",
      courseGoalB: "Master the course!",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        return this.courseGoal;
      } else {
        return this.courseGoalB;
      }
    },
  },
}).mount("#user-goal");
