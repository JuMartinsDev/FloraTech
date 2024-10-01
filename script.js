function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function login(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log('Login com:', email, password);
    showScreen('main-screen');
}

function recoverPassword() {
    showScreen('login-screen');
}

function criarConta(event) {
    event.preventDefault();
    showScreen('login-screen');
}


