
function cuentaAtras(desde) {

    //Notificar al hilo principal:
    postMessage(desde);

    //Comprobar que la cuenta atrás no ha llegado a 0:
    if (desde>0){
        setTimeout(function () {
            //Espera un segundo y lanza la función de nuevo,
            //Decrementando el valor de la cuenta atrás
            cuentaAtras(--desde);
        }, 1000);
    }
}

//Iniciar la cuenta atrás.
cuentaAtras(10);