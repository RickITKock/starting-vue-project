const buttonElement = document.querySelector('button');
const inputElement = document.querySelector('input');
const unorderedListElement = document.querySelector('ul');

function addGoal() {
    const enteredValue = inputElement.value;
    const listElement = document.createElement('li');
    listElement.textContent = enteredValue;
    unorderedListElement.appendChild(listElement);
    inputElement.value = '';
}

buttonElement.addEventListener('click', addGoal);