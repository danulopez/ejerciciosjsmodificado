//Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la 
//información del evento del click

let button$$ = document.createElement('button');
button$$.id = 'btnToClick';

function imprimir (evento) {
    console.log(evento);
}

button$$.addEventListener('click', imprimir);
document.appendChild(button$$)