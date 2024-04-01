document.getElementById('signup-switch').addEventListener('click', function() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('signup').style.display = 'block';
    document.getElementById('signup-switch').classList.add('active');
    document.getElementById('login-switch').classList.remove('active');
});

document.getElementById('login-switch').addEventListener('click', function() {
    document.getElementById('signup').style.display = 'none';
    document.getElementById('login').style.display = 'block';
    document.getElementById('login-switch').classList.add('active');
    document.getElementById('signup-switch').classList.remove('active');
});