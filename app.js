Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        }
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        }
    }
}).mount('#app');


// const buttonElement = document.querySelector('button');
// const inputElement = document.querySelector('input');
// const unorderedListElement = document.querySelector('ul');

// function addGoal() {
//     const enteredValue = inputElement.value;
//     const listElement = document.createElement('li');
//     listElement.textContent = enteredValue;
//     unorderedListElement.appendChild(listElement);
//     inputElement.value = '';
// }

// buttonElement.addEventListener('click', addGoal);