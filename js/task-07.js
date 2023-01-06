'use strict';

const input=document.querySelector("#font-size-control");
const text=document.querySelector("#text");
input.addEventListener("input",(event)=>{
    let size=event.currentTarget.value;
    console.log(size);
    text.style.fontSize=`${size}px`;
    console.log(text);

});