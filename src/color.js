import { SaveData } from "./app.js";

const red = document.querySelector(".red");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");

const colorDiv = document.querySelector(".colorDiv");
const console = document.querySelector(".codeColor");
const copy = document.querySelector(".Copy");

const borderDiv = document.querySelector(".border-div");

let color;

function SetColor()
{
    color = "rgb(" + red.value + "," + green.value + "," + blue.value + ")";
    let lastColor = "background-color: " + color + ";";

    colorDiv.style.backgroundColor = color;
    borderDiv.style.backgroundColor = color;
    console.value = lastColor;

    SaveData;
}

function CopyRGB()
{
    console.select();
    document.execCommand("copy");
    console.blur();

    SaveData;
}

export {color, SetColor};
 
red.addEventListener("input", SetColor);
green.addEventListener("input", SetColor);
blue.addEventListener("input", SetColor);

copy.addEventListener("click", CopyRGB);