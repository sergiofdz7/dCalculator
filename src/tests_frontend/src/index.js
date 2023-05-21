// Purpose: Frontend for calculator
import { tests_backend } from "../../declarations/tests_backend";

// Clears input field and output field
document.getElementById("value").innerText = "";
document.getElementById("output").innerText = "";
const button = document.querySelectorAll("button")

// Async functions to call Motoko functions
const add = async (value) => {
  await tests_backend.add(value);
}
const sub = async (value) => {
  await tests_backend.sub(value);
}
const mul = async (value) => {
  await tests_backend.mul(value);
}
const div = async (value) => {
  await tests_backend.div(value);
}
var mod = async (value) => {
  await tests_backend.mod(value);
}
const pow = async (value) => {
  await tests_backend.pow(value);
}
const sqrt = async () => {
  await tests_backend.sqrt();
}

const clear = async () => {
  document.getElementById("value").innerText = "";
  await tests_backend.clear();
}
const inputClear = async () => {
  document.getElementById("value").innerText = "";
}
const getResult = async () => {
  const result = await tests_backend.getValue();
  document.getElementById("output").innerText = result;
}
// Listens for button click event
button.forEach(element => {
  element.addEventListener("click", async (e) => { // Listens for button click event
    switch (e.target.id) {
      case "add":
        await add(parseFloat(document.getElementById("value").innerText));
        await inputClear();
        await getResult();
        break;
      case "sub":
        await sub(parseFloat(document.getElementById("value").innerText));
        await inputClear();
        await getResult();
        break;
      case "mul":
        await mul(parseFloat(document.getElementById("value").innerText));
        await inputClear();
        await getResult();
        break;
      case "div":
        await div(parseFloat(document.getElementById("value").innerText));
        await inputClear();
        await getResult();
        break;
      case "mod":
        await mod(parseFloat(document.getElementById("value").innerText));
        await inputClear();
        await getResult();
        break;
      case "eq":
        await getResult();
        break;
      case "pow":
        await pow(parseFloat(document.getElementById("value").innerText));
        await inputClear();
        await getResult();
        break;
      case "sqrt":
        await sqrt(parseFloat(document.getElementById("value").innerText));
        await inputClear();
        await getResult();
        break;
      case "clear":
        await clear();
        await getResult();
        break;
      case "plus-minus":
        var temp = parseFloat(document.getElementById("value").innerText);
        temp = temp * -1;
        document.getElementById("value").innerText = temp.toString();
      case "erase":
        document.getElementById("value").innerText = document.getElementById("value").innerText.slice(0, -1);
        break;
      case "zero":
        document.getElementById("value").innerText += "0";
        break;
      case "one":
        document.getElementById("value").innerText += "1";
        break;
      case "two":
        document.getElementById("value").innerText += "2";
        break;
      case "three":
        document.getElementById("value").innerText += "3";
        break;
      case "four":
        document.getElementById("value").innerText += "4";
        break;
      case "five":
        document.getElementById("value").innerText += "5";
        break;
      case "six":
        document.getElementById("value").innerText += "6";
        break;
      case "seven":
        document.getElementById("value").innerText += "7";
        break;
      case "eight":
        document.getElementById("value").innerText += "8";
        break;
      case "nine":
        document.getElementById("value").innerText += "9";
        break;
      case "dot":
        document.getElementById("value").innerText += ".";
        break;
      default:
        console.log("Invalid Input");
        break;
    }
    return false;
  });
});



document.addEventListener("keydown", async (e) => { // Listens for keydown event
  var input = document.getElementById("value").innerText;
  switch (e.key) {
    case "Enter": // Gets result from Motoko
      await getResult();
      break;
    case "Backspace":
      document.getElementById("value").innerText = document.getElementById("value").innerText.slice(0, -1); // Removes last character from input field
      break;
    case "Shift": // Ignores shift key
      break;
    case "c":
      await clear();
      await getResult();
      break;
    case ".":
      document.getElementById("value").innerText += (e.key).toString();
      break;
    case "0": // Adds key to input field
      document.getElementById("value").innerText += (e.key).toString();
      break;
    case "1":
      document.getElementById("value").innerText += (e.key).toString();
      break;
    case "2":
      document.getElementById("value").innerText += (e.key).toString();
      break;
    case "3":
      document.getElementById("value").innerText += (e.key).toString();
      break;
    case "4":
      document.getElementById("value").innerText += (e.key).toString();
      break;
    case "5":
      document.getElementById("value").innerText += (e.key).toString();
      break;
    case "6":
      document.getElementById("value").innerText += (e.key).toString();
      break;
    case "7":
      document.getElementById("value").innerText += (e.key).toString();
      break;
    case "8":
      document.getElementById("value").innerText += (e.key).toString();
      break;
    case "9":
      document.getElementById("value").innerText += (e.key).toString();
      break;
    case "+":
      await add(parseFloat(document.getElementById("value").innerText));
      await inputClear();
      await getResult();
      break;
    case "-":
      await sub(parseFloat(document.getElementById("value").innerText));
      await inputClear();
      await getResult();
      break;
    case "*":
      await mul(parseFloat(document.getElementById("value").innerText));
      await inputClear();
      await getResult();
      break;
    case "/":
      await div(parseFloat(document.getElementById("value").innerText));
      await inputClear();
      await getResult();
      break;
    case "%":
      await mod(parseFloat(document.getElementById("value").innerText));
      await inputClear();
      await getResult();
      break;
    case "^":
      await pow(parseFloat(document.getElementById("value").innerText));
      await inputClear();
      await getResult();
      break;
    default:
      console.log("Invalid Input");
      break;
  }
});
