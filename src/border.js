const container = document.querySelector(".border-div");
const console = document.querySelector(".code-border");
const copyBtn = document.querySelector(".copy-border");

const topLeft = document.getElementById("top-left");
const topRight = document.getElementById("top-right");
const bottomLeft = document.getElementById("bottom-left");
const bottomRight = document.getElementById("bottom-right");

let borderRadius;

function SetBorderRadius()
{
    borderRadius = " " + topLeft.value + "% " + topRight.value + "% " + bottomLeft.value + "% " + bottomRight.value + "%";

    container.style.borderRadius = borderRadius;
    console.value = "border-radius:" + borderRadius + ";";
}

function CopyBorderRadius()
{
    console.select();
    document.execCommand("copy");
    console.blur();
}


topLeft.addEventListener("input", SetBorderRadius);
topRight.addEventListener("input", SetBorderRadius);
bottomLeft.addEventListener("input", SetBorderRadius);
bottomRight.addEventListener("input", SetBorderRadius);
copyBtn.addEventListener("click", CopyBorderRadius);