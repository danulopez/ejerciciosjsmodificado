//En este ejercicio vamos a pintar todas las propiedades de las peliculas.
//De nuevo, tendremos una api local que deberemos ejecutar con json-server json-server --watch exercise-7.json. 
//La url en cuestión de los personajes sería http://localhost:3000/movies. 
//Ten en cuenta que como usamos imágenes locales tienes que hacer el ejercicio en esta misma carpeta o llevarte la carpeta /public 
//(carpeta con imágenes) donde tengas tus propios ejercicios.

function init() {
    getAMovie();
}

async function getAMovie (){
    const response = await fetch('http://localhost:3000/movies')
    const movies = await response.json();
    console.log(movies);
    printMovies(movies);
   
}

function printMovies (movies) {
    for (const movie of movies) {
        const container$$ = document.createElement('div');
        
        container$$.innerHTML= `
        <h2>${movie.title}</h2>
        <p>${movie.description}</p>
        <p>${movie.date}</p>
        <p>${movie.rating}</p>
        <img src="http://localhost:3000/${movie.img}"/>
         `    
                
    document.body.appendChild(container$$)
    }

}
init ()