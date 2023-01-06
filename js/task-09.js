'use strict';
const btn=document.querySelector(".change-color");
const span=document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btn.addEventListener("click", () => {
  let color=getRandomHexColor();
  console.log(color)
  document.body.style.backgroundColor=color;
  span.textContent=color;
});