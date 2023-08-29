const red = document.querySelector(".red");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");

const colorDiv = document.querySelector(".colorDiv");
const console = document.querySelector(".codeColor");

let color;

function SetColor()
{
    color = "background-color: rgb(" + red.value + "," + green.value + "," + blue.value + ");"; 

    colorDiv.style.backgroundColor = color;
    console.value = color;
}


red.addEventListener("input", SetColor);
green.addEventListener("input", SetColor);
blue.addEventListener("input", SetColor);