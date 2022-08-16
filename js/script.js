// console.log('Connected!!');

//step: 1. Event handeler added to submit button

document.getElementById('btn-submit').addEventListener('click',function(){
//Step:2. get the email form user
// always use.value to retrive data from input field

const emailField = document.getElementById('user-email');
const email = emailField.value;
// console.log(email);

//Step:3. get the password form user
// always use.value to retrive data from input field

const passwordField = document.getElementById('user-password');
const password = passwordField.value;
// console.log(password);

//Denger!! Do not use this approach for clients
// Validating email password
    if(email === 'sontan@baap.com' && password === 'secret'){
        window.location.href = 'bank.html'
    }
    else if(email !== 'sontan@baap.com' && password !== 'secret'){

        alert('Username or password not match!!');
    }
    else{
       alert('Please Enter Correct Username Password');
    }
})