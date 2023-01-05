'use strict';
const item = document.querySelectorAll('.item');
console.log("Number of categories: "+ item.length);

const listItem = document.querySelectorAll('.item');
listItem.forEach((item,i,arry)=>{
    const category=item.querySelector("h2").textContent;
    console.log('Category: '+ category); 
    const elem=item.querySelectorAll("li").length;
    console.log('Elements: '+ elem)

});