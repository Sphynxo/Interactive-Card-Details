"use strict";

let cardNumber = document.querySelector(".card-number");
cardNumber.textContent = "0000000000000000";
let cardNumberSpaced = cardNumber.textContent.match(/.{1,4}/g);
cardNumber.textContent = cardNumberSpaced.join(" ");
const cardNumberInput = document.querySelector(".card-number-right");

const cardHolderName = document.querySelector(".cardholder-name");
let nameOnCard = document.querySelector(".card-name");

let cardMonth = document.querySelector(".card-month");
cardMonth.textContent = "00";
const cardMonthInput = document.querySelector(".month");

let cardYear = document.querySelector(".card-year");
cardYear.textContent = "00";
const cardYearInput = document.querySelector(".year");

let cardCvc = document.querySelector(".card-cvc");
cardCvc.textContent = "000";
const cardCvcInput = document.querySelector(".cvc-number");

nameOnCard.textContent = "jane Appleseed";

const confirmBtn = document.querySelector(".confirm");

cardHolderName.addEventListener("input", function () {
  nameOnCard.textContent = cardHolderName.value;
});

cardNumberInput.addEventListener("input", function () {
  cardNumber.textContent = cardNumberInput.value;
  let cardNumberSpaced = cardNumber.textContent.match(/.{1,4}/g);
  cardNumber.textContent = cardNumberSpaced.join(" ");
});

cardMonthInput.addEventListener("input", function () {
  cardMonth.textContent = cardMonthInput.value;
});

cardYearInput.addEventListener("input", function () {
  cardYear.textContent = cardYearInput.value;
});

cardCvcInput.addEventListener("input", function () {
  cardCvc.textContent = cardCvcInput.value;
});

confirmBtn.addEventListener("click", function () {
  function containsNumber(str) {
    return /[0-9]/.test(str);
  }

  if (
    cardNumberInput.value == "" ||
    cardHolderName.value == "" ||
    cardMonthInput.value == "" ||
    cardCvcInput.value == "" ||
    cardYearInput.value == ""
  ) {
    document.querySelector(".for-number-empty").classList.remove("hidden");
    document.querySelector(".for-name").classList.remove("hidden");
    document.querySelector(".for-date").classList.remove("hidden");
    document.querySelector(".for-cvc").classList.remove("hidden");
  } else if (isNaN(cardNumberInput.value)) {
    document.querySelector(".for-card-number").classList.remove("hidden");
  } else if (cardNumberInput.value.length !== 16) {
    document.querySelector(".for-number-length").classList.remove("hidden");
  } else if (containsNumber(nameOnCard.textContent)) {
    document.querySelector(".for-name-number").classList.remove("hidden");
  } else if (cardMonthInput.value > 12) {
    document.querySelector(".for-date-correct").classList.remove("hidden");
  } else if (cardYearInput.value < 23) {
    document.querySelector(".for-date-correct").classList.remove("hidden");
  } else {
    document.querySelector(".forms-first").classList.add("hidden");
    document.querySelector(".complete").classList.remove("hidden");
    confirmBtn.classList.add("hidden");
  }
});
