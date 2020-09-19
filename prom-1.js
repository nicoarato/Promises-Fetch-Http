function suma1(numero) {

    var promesa = new Promise(function(resolve, reject) {

        console.log(numero);
        if (numero >= 11) {
            reject('El numero se pasó 11');
        }

        setTimeout(function() {
            resolve(numero + 1)
        }, 800);

    });

    return promesa;

}

// suma1(5).then(nuevoNum => {
//         console.log(nuevoNum);
//         return suma1(nuevoNum)
//     })
//     .then(nuevoNum => {
//         console.log(nuevoNum)
//         return suma1(nuevoNum)
//     })
//     .then(nuevoNum => {
//         console.log(nuevoNum)
//     });

suma1(7)
    .then(suma1)
    .then(suma1)
    .then(suma1)
    .then(suma1)
    .then(suma1)
    .then(suma1)
    .then(suma1)
    .then(nuevoValor =>
        console.log(nuevoValor)
    )
    .catch(error => {
        console.log('Error en promesa');
        console.log(error);
    });