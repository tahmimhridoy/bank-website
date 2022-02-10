document.getElementById('submit-btn').addEventListener('click', function(){
    // user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    console.log(userEmail)
    // user passward
    const passwardField = document.getElementById('user-password');
    const userPassword = passwardField.value;
    console.log(userPassword)
    if(userEmail == 'sontan@baap.com' && userPassword == 'secret'){
        window.location.href = 'bank.html';
    }
})