//Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, 
//igual o mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.

const movies = [{name: "Your Name", durationInMinutes: 130},
{name: "Pesadilla antes de navidad", durationInMinutes: 225}, 
{name: "Origen", durationInMinutes: 165}, 
{name: "El señor de los anillos", durationInMinutes: 967}, 
{name: "Solo en casa", durationInMinutes: 214}, 
{name: "El jardin de las palabras", durationInMinutes: 40}];

const sMovies = [];
const mMovies = [];
const lMovies = [];

for (let index = 0; index < movies.length; index++) {
    const movie = movies[index];
    if (movie.durationInMinutes < 100) {
        sMovies.push(movie);
    } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
        mMovies.push(movie);
    } else {
        lMovies.push(movie);
    }
}

console.log(sMovies);
console.log(mMovies);
console.log(lMovies);