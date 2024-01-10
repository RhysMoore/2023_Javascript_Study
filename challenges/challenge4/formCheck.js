// Gain Access to form elements
const submitButton = document.getElementById('submit');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const phoneField = document.getElementById('phone');

// Add event listener to submit button
submitButton.addEventListener('click', checkForm);


function checkForm(){
    /*
        In this method check whether name, email, and phone number have input.
        If they are blank turn the fields red.  Otherwise do nothing.
     */

    // Check name field
    if(nameField.value === ''){
        nameField.style.backgroundColor = 'red';
    }else{
        nameField.style.backgroundColor = 'white';
    }

    // Check email field
    if(emailField.value === ''){
        emailField.style.backgroundColor = 'red';
    }else{
        emailField.style.backgroundColor = 'white';
    }

    // Check phone field
    if(phoneField.value === ''){
        phoneField.style.backgroundColor = 'red';
    }else{
        phoneField.style.backgroundColor = 'white';
    }

    alert("It is hooked up!");
}