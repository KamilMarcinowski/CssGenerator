import {color, SetColor} from "./color.js";

const red = document.querySelector(".red");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");

const console = document.querySelector(".codeColor");

function InitApp()
{
    LoadData();
    SetColor();
}

function SaveData()
{
    localStorage.setItem("red", red.value);
    localStorage.setItem("green", green.value);
    localStorage.setItem("blue", blue.value);

    localStorage.setItem("console", console.value);
}

function LoadData()
{
    red.value = localStorage.getItem("red");
    green.value = localStorage.getItem("green");
    blue.value = localStorage.getItem("blue");

    console.value = localStorage.getItem("console");
}

export {SaveData};

window.addEventListener("load", InitApp);