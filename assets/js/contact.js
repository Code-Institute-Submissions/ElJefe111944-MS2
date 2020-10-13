const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const form = document.getElementById('form');
const errorMessage = document.getElementById('messageError');
const messageSent = document.getElementById('sent');
const errorName = document.getElementById('nameError');
const errorEmail = document.getElementById('emailError');

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let nameError = ""
    let emailError = ""
    let messageError = ""
    let enter = false
    var emailValidator = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; 
    errorMessage.innerHTML = ""
    
    if (name.value.length < 3){
        nameError += 'Invalid Name <br>'
          enter = true
    }   
     
    if (!emailValidator.test(email.value)){
        emailError += "Invalid Email <br>"
        enter = true
    }
    if(message.value.length <= 10){
        messageError += "Please Enter More Than 10 Characters<br>"
        enter = true
    }
    if (enter){
        errorMessage.innerHTML = messageError;
        errorName.innerHTML = nameError;
        errorEmail.innerHTML = emailError;

    } else {
        messageSent.innerHTML = 'Your Message Has Been Sent'
    }
})