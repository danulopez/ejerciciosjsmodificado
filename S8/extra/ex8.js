//Añade un evento click al botón `Call a cat` que haga una petición a `https://api.thecatapi.com/v1/images/search`.
//Pinta la imagen que recibas de la api y añade además un botón `Eliminar` que elimine la imagen del gato.
//Puedes hacer click tantas veces como quieras en el botón `Call a cat`. De modo que si hago click 5 veces, pintaré 5 gatos
const btn$$ = document.createElement('button')
btn$$.textContent = 'Call a cat';
document.body.appendChild(btn$$);

btn$$.addEventListener('click', getACat)

function getACat() {
 console.log();
 fetch('http://api.thecatapi.com/v1/images/search') 
 .then(res => res.json()).then( res2=> {
    console.log(res2)
    

    printCat (res2[0])
})}

function printCat(image) {
    const container$$ = document.createElement('div')

const img$$ = document.createElement('img')
    img$$.src = image.url;
    container$$.appendChild(img$$);
    

const buttonRemove$$ = document.createElement('button')
buttonRemove$$.textContent = 'Remove';
buttonRemove$$.addEventListener('click', () => removeCat(container$$))
container$$.appendChild(buttonRemove$$)

document.body.appendChild(container$$)
}

function removeCat (continerToRemove$$){
    continerToRemove$$.remove();
}
