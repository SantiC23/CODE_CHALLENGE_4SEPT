document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const formDataJSON = {};

        formData.forEach((value, key) => {
            formDataJSON[key] = value;
        });

        // Realizar la solicitud POST
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formDataJSON),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Respuesta del servidor:', data);
            alert('Registro exitoso. Consulta la consola para ver la respuesta del servidor.');
            form.reset(); // Limpiar el formulario después del registro
        })
        .catch(error => {
            console.error('Error al realizar la solicitud:', error);
            alert('Ocurrió un error al realizar el registro.');
        });
    });
});
