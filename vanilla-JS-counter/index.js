const add = document.querySelector("#up");
const minus = document.querySelector("#down");
const number = document.querySelector("#display-number");

let count = 32;

const printNumber = () => {
  number.innerText = count;
}
printNumber();

const addUp = () => {
  count++;
  printNumber();
}
const subDown = () => {
  count--;
  printNumber();
}

add.addEventListener("click", addUp);
minus.addEventListener("click", subDown);