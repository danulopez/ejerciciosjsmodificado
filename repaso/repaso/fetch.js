const getCharacters = () => {
    // NOS DA UNA PROMESA
    fetch('https://starwars-server.vercel.app/characters')  
    // CUANDO SE RESUELVE ESTA PROMESA TENEMOS UN OBJETO DE TIPO RESPONSE,
    // DE ESTE RESPONSE LANZAMOS EL .JSON PARA OBTENER LOS DATOS y ESTO NOS DA UNA PROMESA   
    .then((primeraRespuesta) => primeraRespuesta.json()) 
    //CUANDO SE RESUELVE ESTA PROMESA TENEMOS LOS DATOS       
    .then((segundaRespuesta) => {
        
        console.log("estos son los caracteres",segundaRespuesta.data.characters)
        return segundaRespuesta.data.characters
    })
}

getCharacters()

const pintar = (characters) => { 
    console.log("Estoy en mi funcion pintar",characters) 
    const div$$ = document.createElement("div"); 
    for (const character of characters) 
    { const div2$$ = document.createElement("div"); 
    div2$$.innerHTML = ` 
    <h4>${character.name}</h4>
     <img src="${character.image}"/> `; 
     div$$.appendChild(div2$$); } 
    document.body.appendChild(div$$); } 

const getCharactersAsync = async() => {
    // ESPERAMOS A QUE SE RESUELVA LA PROMESA Y LA GUARDAMOS EN UNA VARIABLE
    const primeraRespuesta = await fetch('https://starwars-server.vercel.app/characters') 
    // COMO TENGO UN OBJETO DE TIPO RESPONSE, LANZAMOS EL .JSON PARA OBTENER LOS DATOS, y ESPERAMOS A QUE SE RESUELVA SU PROMESA
    const segundaRespuesta = await primeraRespuesta.json()

    console.log(segundaRespuesta)
    return segundaRespuesta.data.characters
}

getCharactersAsync()

const getCharacters2 = async() => {
    const misCharacters = await getCharactersAsync()
    console.log("aqui tengo mis caracters", misCharacters)
}

getCharacters2()



  