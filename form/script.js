const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

function showError(input, msg)
{
    const formControl = input.parentElement;
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = msg
}
function showSuccess(input)
{
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

function checkEmail(email)
{
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(re.test(email.value.trim())){
        showSuccess(email)
    }else{
        showError(email,'Email is not valid')
    }
}

function passwordMatched(temp)
{
    if(password.value === temp)
    {
        return true
    }else{
        return false
    }
}

function checkRequired(temp)
{
    temp.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,`${input.id} is required`)
        }else{
            showSuccess(input)
        }
    })
}

function checkLength(temp,a,b)
{
    if(temp.value.length<a){
        showError(temp,'Length should be between 3 to 15')
    }else if(temp.value.length>b){
        showError(temp,'Length should be between 3 to 15')
    }else{
        showSuccess(temp)
    }
}

function checkPassword(input1,input2)
{
    if(input1.value !== input2.value){
        showError(input2,'Please enter same password again')
    }
}

//EVENT Listener
form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([username,email,password,password2]);
    checkLength(password,3,15)
    checkEmail(email)
    checkPassword(password,password2)
});