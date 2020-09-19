// promise all
function sumarLento(numero) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {

            resolve(numero + 1);
            // reject('sumar lento fallo');


        }, 800);
    });
}

let sumarRapido = (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(numero + 1)
        }, 300);
    });
}

// sumarLento(5).then(console.log);
// sumarRapido(10).then(console.log);

function dameTrue() {
    return true;
}

Promise.all([sumarLento(5), sumarRapido(10), true, 'holamundo', dameTrue()])
    .then(respuestas => {
        console.log(respuestas);
    })
    .catch(console.log);