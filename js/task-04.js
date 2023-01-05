'use strict';

let counterValue=0;
const htmlValue=document.querySelector("#value");
const Inc=document.querySelector('[data-action="increment"]');
const Dec=document.querySelector('[data-action="decrement"]');

console.log(htmlValue);
console.log(htmlValue.textContent);

Inc.addEventListener("click", ()=>{
    counterValue=1+counterValue;
    htmlValue.textContent=counterValue; 
});



Dec.addEventListener("click", ()=>{  
    counterValue=counterValue-1;
    htmlValue.textContent=counterValue;
});

console.log(counterValue);
