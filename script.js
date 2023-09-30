const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;

    const persona = {
        name: nombre,
        username: apellido,
        email: fechaNacimiento
    };

    fetch("https://jsonplaceholder.typicode.com/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(persona)
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        document.getElementById('nombre').value = '';
        document.getElementById('apellido').value = '';
        document.getElementById('fechaNacimiento').value = '';

    })
    .catch((error) => {
        console.error('Error en la solicitud:', error);
    });

});