'use strict';

const boxes=document.querySelector("#boxes");
const input=document.querySelector('[type="number"]');
const create=document.querySelector('button[data-create]');
const destroy=document.querySelector('button[data-destroy]');
let amount ;

input.addEventListener('input',e =>{
  amount=e.currentTarget.value;
});

// Button Create
create.addEventListener('click', (e)=>{
  createBoxes(amount);
});
// Button Destroy
destroy.addEventListener('click',()=>{
  destroyBoxes();
});

function createBoxes(amount) {
  console.log(amount);
  let listBox=[];
  for (let i=0;i<amount;i+=1){
    const color= getRandomHexColor();
    const size=30+i*10;
    const box=`<div style="background-color:${color};  width:${size}px;  height:${size}px;" ></div>`
    listBox.push(box);
  }
  console.log(typeof(listBox));
  console.log(listBox);
  const StingBox=listBox.join("");
  console.log(typeof(StingBox));
  console.log(StingBox);
  boxes.innerHTML=StingBox;
}
function destroyBoxes(){
  boxes.innerHTML="";
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


