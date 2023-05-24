function init () {
    getCharacters()
}


async function getCharacters () {
const response = await fetch('https://starwars-server.vercel.app/characters')
const caracteres = await response.json();
console.log(caracteres.data.characters)
 getCharacters(caracteres.data.characters)
}

const printCharacters = (characters) => {
    
    const div$$ = document.createElement('div')
    for (const character of characters) {
        const div2$$ = document.createElement("div"); 
    div2$$.innerHTML = ` <h4>${character.name}</h4>
     <img src="${character.image}"/> `; 

     div$$.appendChild(div2$$); } 

    document.body.appendChild(div$$); 
} 
init ()


 
    

    
