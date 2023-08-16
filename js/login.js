document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    const passwordField = document.getElementById('password');
    const password = passwordField.value;
    emailField.value = '';
    passwordField.value = '';
    if(email === 'sasjoy02@gmail.com' && password === '01764746891'){
        window.location = 'bank.html'
    }
    else{
        alert('Toke ami tejjo sontan ghosona korlam tui password vule gechos')
    }

    
})