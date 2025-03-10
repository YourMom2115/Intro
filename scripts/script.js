document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    var roll = '';
    if (username === 'seller456' && password === 'Intro123') {
        roll = 'COMPRADOR';
    } else if (username === 'dancabello' && password === 'J5*asdRD.s') {
        roll = 'VENDEDOR';
    } else if (username === 'root' && password === 'dochouse') {
        roll = 'ADMIN';
    }

    if (roll) {
        alert(`Bienvenido ${roll}`);
        if (roll === 'COMPRADOR') {
            window.location.href = '../pages/pagina.html'; 
        } else if (roll === 'VENDEDOR') {
            window.location.href = '../pages/paginavendedor.html'; 
        } else if (roll === 'ADMIN') {
            window.location.href = '../pages/paginaAdmin.html'; 
        }
    } else {
        alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }
});