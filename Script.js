// Ejemplo de interactividad: Cambiar el color del Titulo al hacer clic
const titulo = document.querySelector('h1');

titulo.addEventListener('click', () => {
    titulo.style.color = 'red';
});


// Manejo de formulario

const formulario = document.getElementById('formulario-contacto');

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if(nombre && email && mensaje){
        alert(`Gracias, ${nombre}. Tu mensaje ha sido enviado`);
        formulario.reset(); // Limpia el formulario.
    }else{
        alert('Por favor, completa todos los campos');
    }
});