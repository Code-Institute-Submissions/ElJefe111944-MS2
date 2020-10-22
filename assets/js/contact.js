let names = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');
let form = document.getElementById('form');
let errorMessage = document.getElementById('messageError');
let messageSent = document.getElementById('sent');
let errorName = document.getElementById('nameError');
let errorEmail = document.getElementById('emailError');

form.addEventListener("submit", e=>{
    e.preventDefault();
    let nameError = "";
    let emailError = "";
    let messageError = "";
    let enter = false;
    var emailValidator = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; 
    errorMessage.innerHTML = "";
    
    if (names.value.length < 3){
        nameError += 'Invalid Name <br>';
          enter = true;
    }   
     
    if (!emailValidator.test(email.value)){
        emailError += "Invalid Email <br>";
        enter = true;
    }
    if(message.value.length <= 10){
        messageError += "Please Enter More Than 10 Characters<br>";
        enter = true;
    }
    if (enter){
        errorMessage.innerHTML = messageError;
        errorName.innerHTML = nameError;
        errorEmail.innerHTML = emailError;

    } else {
        messageSent.innerHTML = 'Your Message Has Been Sent';
    }
});