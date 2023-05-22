//Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' 
//para hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un console.log().

fetch ('https://api.agify.io?name=michael')
.then(res => res.json())
.then((resAgify) => {
    console.log(resAgify);
})
.catch((resError)=> {
    console.log(resError);
})
