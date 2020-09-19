fetch('https://reqres.in/api/users/100')
    .then(resp => {


        if (resp.ok) {

            return resp.json();

        } else {
            throw new Error('No existe el usuario 404')
        }
    })
    .then(console.log)
    .catch(error => {
        console.log('Error en la respuesta');
        console.log(error);
    });