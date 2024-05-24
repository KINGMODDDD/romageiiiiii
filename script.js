document.getElementById('auth-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'Teke_Love' && password === '12345678') {
        document.getElementById('auth-container').style.display = 'none';
        document.getElementById('key-container').style.display = 'block';
    } else {
        alert('Неправильное имя пользователя или пароль!');
    }
});

document.getElementById('generate-key').addEventListener('click', function() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let key = '';
    for (let i = 0; i < 45; i++) {
        key += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('key-output').innerText = key;
});
