const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const form = document.getElementById('form');
const errorMessage = document.getElementById('warnings');

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let enter = false
    var emailValidator = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; 
    errorMessage.innerHTML = ""
    
    if (name.value.length < 3){
        warnings += 'Invalid Name <br>'
          enter = true
    }   
     
    if (!emailValidator.test(email.value)){
        warnings += "Invalid Email <br>"
        enter = true
    }
    if(message.value.length <= 10){
        warnings += "Please Enter More Than 10 Characters<br>"
        enter = true
    }
    if (enter){
        errorMessage.innerHTML = warnings;
    } else {
        errorMessage.innerHTML = 'Your Message Has Been Sent'
    }
})