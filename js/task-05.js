'use strict';


const input=document.querySelector("#name-input");
console.log(input);
const output=document.querySelector("#name-output");
console.log(output);

input.addEventListener('input',(event) =>{
    console.log(event);
    console.log(event.currentTarget);
    console.log(event.currentTarget.value);
    let x=event.currentTarget.value;

    // console.log(x);
    // console.log(typeof(x));
    if (event.currentTarget.value==="") {
        output.textContent="Anonymous"; 
    } else {
        output.textContent=event.currentTarget.value;
    }
});