let usuario = {
    nombre: 'Federico',
    edad: 32
};

fetch('https://reqres.in/api//userss', {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(resp => resp.json())
    .then(console.log)
    .catch(error => {

        console.log('Error en la peticion:');
        console.error(error);
    });