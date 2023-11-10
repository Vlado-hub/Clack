/**
 * Let's create a small script
 * where users can input two numbers,
 * choose an operation
 * (addition, subtraction, multiplication, or division),
 * and see the result.
 */

// Create a function to perform calculations based on user input.

// Add an event listener for the calculate button.


// let btn = document.getElementById("btn");


// function Result() {    
// let number1 = parseInt(document.getElementById("first_operand").value);
// let number2 = parseInt(document.getElementById("second_operand").value);
// let operators = document.getElementById("operator").value;
// let showResult = document.getElementById("result");
//   if (operators === "+") {
//      showResult.innerHTML = number1 + number2;
//   } else if (operators === "-") {
//      showResult.innerHTML = number1 - number2;
//   } else if (operators === "/") {
//      showResult.innerHTML = number1 / number2;
//   } else if (operators === "*") {
//      showResult.innerHTML = number1 * number2;
//   } else {
//     console.log("somthing wrong");
//   }
// }
// btn.addEventListener("click", Result);


////////////        switch     //////////////////////////////////////
let btn = document.getElementById("btn");

function Result() {
  let number1 = parseInt(document.getElementById("first_operand").value);
  let number2 = parseInt(document.getElementById("second_operand").value);
  let operator = document.getElementById("operator").value;
  let showResult = document.getElementById("result");

  switch (operator) {
    case "+":
      showResult.innerHTML = number1 + number2;
      break;
    case "-":
      showResult.innerHTML = number1 - number2;
      break;
    case "/":
      showResult.innerHTML = number1 / number2;
      break;
    case "*":
      showResult.innerHTML = number1 * number2;
      break;
    default:
      console.log("Something wrong");
  }
}

btn.addEventListener("click", Result);
