const menuContainer = document.getElementById('menu-container');
const menuDropdown = document.getElementById('menu-dropdown');

// Mostrar el menú al pasar el ratón por encima del contenedor del menú
menuContainer.addEventListener('mouseenter', () => {
    menuDropdown.classList.add('open');
    menuContainer.classList.add('menu-open');
});

// Ocultar el menú al sacar el ratón del contenedor del menú y del propio menú
document.querySelector('nav').addEventListener('mouseleave', () => {
    menuDropdown.classList.remove('open');
    menuContainer.classList.remove('menu-open');
});

menuContainer.addEventListener('click', () => {
    menuDropdown.classList.toggle('open');
    menuContainer.classList.toggle('menu-open');
});

let isMale = true;

function drawAvatar() {
    const canvas = document.getElementById('avatarCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = isMale ? 'blue' : 'pink';
    ctx.fillRect(150, 50, 100, 200); // cuerpo básico
    ctx.fillStyle = 'white';
    ctx.fillRect(175, 80, 50, 50); // cabeza básica
}

document.querySelectorAll('#menu-dropdown a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const action = event.target.textContent.trim();

        if (action === 'Crear tu avatar') {
            console.log('Crear tu avatar...');
            // Lógica para crear el avatar
        } else if (action === 'Iniciar sesión') {
            console.log('Iniciar sesión...');
            // Lógica para iniciar sesión
        } else if (action === 'Registrarse') {
            console.log('Registrarse...');
            // Lógica para registrarse
        } else if (action === 'Tu colección') {
            console.log('Tu colección...');
            // Lógica para tu colección
        } else if (action === 'Síguenos') {
            console.log('Síguenos...');
            // Lógica para síguenos
        }

        menuDropdown.classList.remove('open');
        menuContainer.classList.remove('menu-open');
    });
});

drawAvatar();




