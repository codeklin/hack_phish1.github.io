function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert('Login Successful!');
        window.location.href = 'success.html';
    } else {
        alert('Please fill in all fields');
    }
    return false;
}