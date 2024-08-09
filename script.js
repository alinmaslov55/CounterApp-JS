const addButton = document.getElementById('add');
const resetButton = document.getElementById('reset');
const substractButton = document.getElementById('substract');


let counter = document.getElementById("number");

addButton.addEventListener("click", () => {
    let number = counter.innerText;
    counter.innerText = parseInt(number) + 1;
});

resetButton.addEventListener("click", () => {
    counter.innerText = 0;
});

substractButton.addEventListener("click", () => {
    let number = parseInt(counter.innerText) - 1;
    counter.innerText = number < 0? 0 : number;
});