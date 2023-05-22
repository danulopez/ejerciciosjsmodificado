//Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() 
//para hacer una consulta a la api cuando se haga click en el botón, pasando como parametro de la api, el valor del input.

const baseUrl = 'https://api.nationalize.io?name=';

const input$$ = document.querySelector('input');
const btn$$ = document.querySelector('button');

const search = () => {
    fetch (baseUrl + input$$.value)
    .then ((response) => {
        return response.json()
})
.then ((response) => {
    console.log(response);
})
}
btn$$.addEventListener('click', search)

