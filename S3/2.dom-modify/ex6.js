//Basandote en el siguiente array crea una lista ul > li con los textos del array y metelo en el html.


const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let ul$$ = document.createElement('ul');

for (const element of apps) {
    let li$$ = document.createElement('li');
    li$$.textContent = element;
    ul$$.appendChild(li$$)
    
}
document.body.appendChild(ul$$);

