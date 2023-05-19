//Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.


const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let ul$$ = document.createElement('ul');

for (const element of countries) {
    let li$$ = document.createElement('li');
    li$$.textContent = element;
    ul$$.appendChild(li$$)
    
}
document.body.appendChild(ul$$);

