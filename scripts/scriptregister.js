document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    alert('Cuenta creada, por favor inicie sesión.');

    
    window.location.href = '../pages/login.html';
});