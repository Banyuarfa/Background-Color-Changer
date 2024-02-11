const background = document.querySelector("main");
const colorStatus = document.querySelector("p");
const input = document.querySelector("input");
const submit = document.querySelector("button[type='submit']");

const changeColor = () => {
  submit.addEventListener("click", () => {
    background.style.backgroundColor = input.value;
    colorStatus.textContent = input.value;
    input.value = "";
  });
};
changeColor();
