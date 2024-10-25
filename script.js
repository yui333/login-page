document.addEventListener('DOMContentLoaded', function() {
    const joinNowText = document.getElementById('joinNowText');
    const loginRegisterText = document.getElementById('loginRegisterText');
    const actionButton = document.getElementById('actionButton');
    const accountText = document.getElementById('accountText');
    let isLoginMode = true;

    joinNowText.addEventListener('click', function() {
        if (isLoginMode) {
            loginRegisterText.textContent = 'Register';
            actionButton.textContent = 'Register';
            accountText.textContent = 'Already have an account?';
            joinNowText.textContent = 'Login';
        } else {
            loginRegisterText.textContent = 'Login';
            actionButton.textContent = 'Login';
            accountText.textContent = 'Need an Account?';
            joinNowText.textContent = 'Join Now';
        }
        isLoginMode = !isLoginMode;
    });
});