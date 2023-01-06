'use strict';


const input=document.querySelector('#validation-input');
const letter=input.dataset.length;



input.addEventListener('blur',(event)=>{
    let x=event.currentTarget.value
    if (x.length<letter) {
        input.classList.remove("valid");
        input.classList.add("invalid");
    } else {
        input.classList.remove("invalid");
        input.classList.add("valid");
    }
});
