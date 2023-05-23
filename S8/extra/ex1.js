const getCharacters = () => {
fetch('https://starwars-server.vercel.app/characters')
.then(res => res.json())
.then(characters1 => {
    console.log("estos son los caracteres",characters1.data.characters)
        return characters1.data.characters
})
}

getCharacters()

const printCharacters = (characters) => {
    console.log('pinto mis caracteres', characters);
    const div$$ = document.createElement('div')
    for (const character of characters) {
        const div2$$ = document.createElement("div"); 
    div2$$.innerHTML = ` <h4>${character.name}</h4>
     <img src="${character.image}"/> `; 

     div$$.appendChild(div2$$); } 

    document.body.appendChild(div$$); } 

 const getCharactersAsync = async() => {
    const primeraRespuesta = await fetch('https://starwars-server.vercel.app/characters') 
    const segundaRespuesta = await primeraRespuesta.json()
    console.log(segundaRespuesta)
    return segundaRespuesta.data.characters
    }
    
getCharactersAsync()

    
