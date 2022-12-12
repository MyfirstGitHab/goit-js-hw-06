'use strict';
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const AddrresIngred=document.querySelector('#ingredients');

ingredients.forEach((item,)=>{
  const listLi=document.createElement("li");
  listLi.textContent=item;
  listLi.classList.add("item");
  AddrresIngred.append(listLi);
});
console.log(AddrresIngred);

