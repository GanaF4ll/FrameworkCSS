import { getDate } from "./getDate.js";
import { changeBackgroundColor } from "./backgroundcolor.js";

window.onload = function () {
  var color = changeBackgroundColor();
  var imgSrc;

  switch (color) {
    case "red":
      imgSrc = "/assets/Group-red.svg";
      break;
    case "aqua":
      imgSrc = "/assets/Group-bleu.svg";
      break;
    case "#ff99cc":
      imgSrc = "/assets/Group.svg";
      break;
    default:
      imgSrc = "/assets/Group.svg";
  }

  document.getElementById("Circle").src = imgSrc;
};

getDate();
changeBackgroundColor();
