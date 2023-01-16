const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phno');
const password = document.getElementById('pass');
const cpassword = document.getElementById('cpass');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
})

const sendData = (usernameVal, sRate, count) => {
    if(count === sRate){
        swal("Welcome! "+usernameVal, "Registration Successful!", "success");
        location.href = `index.html?username=${usernameVal}`
    }
}

//for final data validation
const successMsg = (usernameVal) => {
    let formCon = document.getElementsByClassName('form-control');
    let count = formCon.length -1;
    for(let i = 0; i < formCon.length; i++){
        if (formCon[i].className === "form-control success"){
            let sRate = 0 +i;
            console.log(sRate);
            sendData(usernameVal, sRate, count);
        }
        else{
            return false;
        }
    }
}

const validate = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = pass.value.trim();
    const cpasswordVal = cpass.value.trim();
    
    
    
    //validate username
    
    if(usernameVal === ""){
        setErrorMsg(username, 'username cannot be blank');
    }
    else if(usernameVal.length <3) {
        setErrorMsg(username, 'username requires min 3 char')
    }
    else{
        setSuccessMsg(username);
    }
    
    //validate email
    
    if(emailVal === ""){
        setErrorMsg(email, 'email cannot be blank');
        console.log('hello')
    }
    else{
        setSuccessMsg(email);
    }
    
    // validate phone number
    if(phoneVal === ""){
        setErrorMsg(phone, 'phone number cannot be blank');
    }
    else if(phoneVal.length != 10){
        setErrorMsg(phone, 'phone number should be of 10 digits');
    }
    else{
        setSuccessMsg(phone);
    }
    
    //validate password
    if(passwordVal === ""){
        setErrorMsg(password, 'password cannot be blank');   
    }
    else if(passwordVal.length < 6){
        setErrorMsg(password, 'password should be greater than 6 char');
    }
    else{
        setSuccessMsg(password)
    }
    
    //validate confirm password
    if(cpasswordVal ===""){
        setErrorMsg(cpassword, 'password cannot be blank');   
    }
    else if(cpasswordVal !== passwordVal ){
        setErrorMsg(cpassword, 'Passwords does not match');
    }
    else{
        setSuccessMsg(cpassword);
        
    }
    successMsg(usernameVal);
}

function setErrorMsg(input, errorMsg){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errorMsg;
}

function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}