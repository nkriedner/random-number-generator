var lowestNumber = document.querySelector("#lowestNumber");
var highestNumber = document.querySelector("#highestNumber");
var randomNumber = document.querySelector("#randomNumber");
var button = document.querySelector("button");
var h2 = document.querySelector("h2");

function getRandomNumber() {
  num1 = parseInt(lowestNumber.value);
  num2 = parseInt(highestNumber.value);
  return Math.floor(Math.random() * (num2 - num1 + 1) + num1);
}

button.addEventListener("click", function() {
  randomNumber.textContent = getRandomNumber();
  randomNumber.classList.remove("highlight2");
  randomNumber.classList.add("highlight");
  setTimeout(function() {
    randomNumber.classList.remove("highlight");
    randomNumber.classList.add("highlight2");
  }, 3000);
});
