'use strict';

const form=document.querySelector(".login-form");
form.addEventListener("submit",processSubmit);


function processSubmit(event){
    event.preventDefault();
    // Перший спосіб
    // const email=event.currentTarget.email;
    // const password=event.currentTarget.password;

    // Другий спосіб
    const {elements:{ email , password }} = event.currentTarget;

console.log(email.value);
console.log(password.value);

    const DATA={
        email:email.value,
        password : password.value,
    };

    if(DATA.email==="" || DATA.password==="" ) {
        alert("Введіть значення");
    }

    event.currentTarget.reset();
}


