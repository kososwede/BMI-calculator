"use strict";

/*
let height = document.getElementById("height");
console.log(document.getElementById("height").value);
let weight = document.getElementById("weight ");
console.log(document.getElementById("weight").value);

let bmi;

let calculateBmi = function () {
  document.querySelector(".btn").addEventListener("click", function () {
    bmi = weight / (height * height);
    return calculateBmi;
  });
  calculateBmi();
};
console.log(bmi);*/

let displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

let displayBmi = function (bmiMessage) {
  document.querySelector(".result").textContent = Number(bmiMessage);
};

document.querySelector(".calculateBmi").addEventListener("click", function () {
  let weight = Number(document.querySelector(".weight").value);
  console.log(weight, typeof weight);
  let height = Number(document.querySelector(".height").value);
  console.log(height, typeof height);
  let bmi = weight / (((height / 100) * height) / 100).toFixed(1);
  let total = Number(bmi).toFixed(1);
  document.querySelector(".result").textContent = Number(bmi).toFixed(1);
  console.log(total, typeof total);

  if (total < 18.5) {
    displayMessage("you are underweight");
  } else if (total >= 18.5 && total <= 24.9) {
    displayMessage("you are normal");
  } else if (total >= 25 && total <= 29.9) {
    displayMessage("you are overweight");
  } else if (total >= 30) {
    displayMessage("You are OBESE");
  }
});
