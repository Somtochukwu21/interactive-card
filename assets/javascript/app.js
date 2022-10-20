//
const userNameEntry = document.getElementById("holder-name");

let userName = document.getElementById("fnameCart");

let nameErrorMessage = document.getElementById("nameError");

userName.innerHTML = "jane appleseed";

//
const cardNumberEntry = document.getElementById("holder-number");

let cardNum = document.getElementById("numberCart");

let numErrorMessage = document.getElementById("numError");

//

const expiryMonth = document.getElementById("expiry-date");

let monthDisplay = document.getElementById("dateCartMM");

let dateError = document.getElementById("dateError");

//

const expiryYear = document.getElementById("expiry-year");

let yearDisplay = document.getElementById("dateCartYY");

//

const cvc = document.getElementById("cvv");

let cvcDisplay = document.getElementById("CVCCart");

let cvErrormessage = document.getElementById("cvError");

//

const form = document.getElementById("form");

const completed = document.getElementById("completed");

function getUserName() {
  //
  if (!userNameEntry.value) {
    userName.innerHTML = "jane appleseed";

    nameErrorMessage.innerHTML = "Can't be blank";

    userNameEntry.style.borderColor = "hsl(0, 100%, 66%)";

    return false;
  }

  nameErrorMessage.innerHTML = "";
  userNameEntry.style.borderColor = "hsl(270, 3%, 87%)";
  userName.innerHTML = userNameEntry.value.toLowerCase();
}

function getCardNum() {
  //
  if (isNaN(cardNumberEntry.value)) {
    //
    numErrorMessage.innerHTML = "Wrong format, numbers only";

    cardNumberEntry.style.borderColor = "hsl(0, 100%, 66%)";

    return false;
  }

  let creditCardN = cardNumberEntry.value;

  let creditCardNumber = creditCardN.match(/.{1,4}/g);

  cardNum.innerHTML = creditCardNumber.join(" ");

  numErrorMessage.innerHTML = "";

  cardNumberEntry.style.borderColor = "hsl(270, 3%, 87%)";
}

function getMonth() {
  //
  if (isNaN(expiryMonth.value)) {
    dateError.innerHTML = "Wrong format, numbers only";

    expiryMonth.style.borderColor = "hsl(0, 100%, 66%)";

    return false;
  }

  dateError.innerHTML = "";

  expiryMonth.style.borderColor = "hsl(270, 3%, 87%)";

  monthDisplay.innerHTML = expiryMonth.value;
}

function getYear() {
  //
  if (isNaN(expiryYear.value)) {
    dateError.innerHTML = "Wrong format, numbers only";

    expiryYear.style.borderColor = "hsl(0, 100%, 66%)";

    return false;
  }

  dateError.innerHTML = "";

  expiryYear.style.borderColor = "hsl(270, 3%, 87%)";

  yearDisplay.innerHTML = expiryYear.value;
}

function getCvv() {
  //
  if (isNaN(cvc.value)) {
    cvErrormessage.innerHTML = "Wrong format, numbers only";

    cvc.style.borderColor = "hsl(0, 100%, 66%)";

    return false;
  }

  cvErrormessage.innerHTML = "";

  cvc.style.borderColor = "hsl(270, 3%, 87%)";

  cvcDisplay.innerHTML = cvc.value;
}

function getInputValue() {
  //
  if (!userNameEntry.value) {
    nameErrorMessage.innerHTML = "Can't be blank";

    userNameEntry.style.borderColor = "hsl(0, 100%, 66%)";

    return false;
  }

  if (!cardNumberEntry.value) {
    //
    numErrorMessage.innerHTML = "Can't be blank";

    cardNumberEntry.style.borderColor = "hsl(0, 100%, 66%)";

    return false;
  }

  if (!expiryMonth.value) {
    //
    dateError.innerHTML = "Can't be blank";

    expiryMonth.style.borderColor = "hsl(0, 100%, 66%)";

    return false;
  }

  if (!expiryYear.value) {
    //
    dateError.innerHTML = "Can't be blank";

    expiryYear.style.borderColor = "hsl(0, 100%, 66%)";

    return false;
  }

  if (!cvc.value) {
    //
    cvErrormessage.innerHTML = "Can't be blank";

    cvc.style.borderColor = "hsl(0, 100%, 66%)";

    return false;
  }

  form.style.display = "none";
  completed.style.display = "flex";
}
