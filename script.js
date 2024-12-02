

//Acá el juego selecciona un número al azar para adivinar
let numeroAzar = Math.floor(Math.random() * 100) + 1;

let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');
let intentos = document.getElementById('intentos');
let cantidadIntentos = 0;

//Esta accion se va ejecutar cuando se toque el botón chequear
function chequearResultado(){
    cantidadIntentos++;
    intentos.textContent = cantidadIntentos;
    let numeroIngresado = parseInt(numeroEntrada.value);

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'Por favor, introduce un número válido entre 1 y 100';
        mensaje.style.color = 'red';
        return;
    }

    if(numeroIngresado === numeroAzar){
        mensaje.textContent = '¡Felicitaciones! ¡Has adivinado el número!';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;
    }else if(numeroIngresado < numeroAzar){
        mensaje.textContent = '¡Más alto! El número es mayor al que dijiste';
        mensaje.style.color = 'red';
    }else {
        mensaje.textContent = '¡Más bajo! El número es menor al que dijiste';
        mensaje.style.color = 'red';
    }
}