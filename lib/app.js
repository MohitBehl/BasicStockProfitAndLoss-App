var initPrice = document.querySelector("#initPrice");
var quantity = document.querySelector("#quantity");
var currPrice = document.querySelector("#currPrice");
var submitBtn = document.querySelector("#submitBtn");
var output = document.querySelector("#output");

submitBtn.addEventListener("click", eventHandler);

function eventHandler() {
  var initialPrice = initPrice.value;
  var currentPrice = currPrice.value;
  var numOfStocks = quantity.value;

  if (
    initialPrice.length === 0 ||
    currentPrice.length === 0 ||
    numOfStocks.length === 0
  ) {
    output.innerText = "input can't be empty.";
    return;
  }
  if (isNaN(initialPrice) || isNaN(currentPrice) || isNaN(numOfStocks)) {
    output.innerText = "input should be a number, kindly enter valid input.";
    return;
  }

  // convert number to string
  initialPrice = parseInt(initialPrice);
  currentPrice = parseInt(currentPrice);
  numOfStocks = parseInt(numOfStocks);

  if (initialPrice < 0 || currentPrice < 0 || numOfStocks < 0) {
    output.innerText = "entered number should be zero or positive.";
    return;
  }

  var diff = currentPrice - initialPrice;
  if (diff > 0) {
    output.innerText = "profit of " + diff * numOfStocks;
  } else if (diff < 0) {
    diff = diff * -1;
    output.innerText = "loss of " + diff * numOfStocks;
  } else {
    output.innerText = "no profit , no loss";
  }
}
