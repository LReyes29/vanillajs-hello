/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  function randomSymbol() {
    let random = Math.ceil(Math.random() * 4);
    switch (random) {
      case 1:
        return "&hearts;";
        break;
      case 2:
        return "&diams;";
        break;
      case 3:
        return "&spades;";
        break;
      default:
        return "&clubs;";
    }
  }

  function randomNumber() {
    let random = Math.ceil(Math.random() * 13);

    switch (random) {
      case 1:
        return "A";
        break;
      case 2:
        return 2;
        break;
      case 3:
        return 3;
        break;
      case 4:
        return 4;
        break;
      case 5:
        return 5;
        break;
      case 6:
        return 6;
        break;
      case 7:
        return 7;
        break;
      case 8:
        return 8;
        break;
      case 9:
        return 9;
        break;
      case 10:
        return 10;
        break;
      case 11:
        return "J";
        break;
      case 12:
        return "Q";
        break;
      default:
        return "K";
    }
  }

  let pinta = randomSymbol();
  let numero = randomNumber();

  let rightsymbol = document.querySelector("#rightsymbol");
  rightsymbol.innerHTML = pinta;

  let number = document.querySelector(".number");
  number.innerHTML = numero;

  let invertedsymbol = document.querySelector("#invertedsymbol");
  invertedsymbol.innerHTML = pinta;

  if (pinta == "&hearts;" || pinta == "&diams;") {
    rightsymbol.classList.add("numberRed");
    number.classList.add("numberRed");
    invertedsymbol.classList.add("numberRed");
  } else {
    rightsymbol.classList.remove("numberRed");
    number.classList.remove("numberRed");
    invertedsymbol.classList.remove("numberRed");
  }
};
