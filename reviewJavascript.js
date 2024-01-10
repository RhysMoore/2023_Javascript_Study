const nameField = document.getElementById("name");
const expField = document.getElementById("exp");
const submitButton = document.getElementById("button");
const image = document.getElementById("image");

submitButton.addEventListener("click", checkText);


function checkText(){
    if(nameField.value === ''){
        nameField.style.backgroundColor = "red";
    }else{
        nameField.style.backgroundColor = "white";
    }

    if(expField.value === ''){
        expField.style.backgroundColor = "red";
    }else{
        expField.style.backgroundColor = "white";
    }

    if(nameField.value !== '' && expField.value !== ''){
        image.style.display = "none";
    }
}