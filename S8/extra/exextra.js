////A partir de este array. Queremos obtener un primer listado listadoFiltrado en el que solo estén los elementos activos.

//Más tarde queremos quedarnos solo con la edad y el nombre en un nuevo listado listadoSimplificado.

//Finalmente suma las edades de todos los items.



const list = [ { id: 1, isActive: true, age: 22, name: 'Bob' }, 
{ id: 2, isActive: false, age: 56, name: 'Tim' }, 
{ id: 3, isActive: true, age: 17, name: 'Clark' }, 
{ id: 4, isActive: true, age: 9, name: 'Roxy' }, 
{ id: 5, isActive: false, age: 71, name: 'Jim' } ];

const listadoFiltrado = list.filter((item) => item.isActive);
console.log(listadoFiltrado);

const listadoSimplificado = listadoFiltrado.map ((item) => {
    return {age: item.age,name: item.name}
    })
    console.log(listadoSimplificado);

 const totalAge = listadoSimplificado.reduce(function(acc,item){
    return acc+ item.age

 }, 0);
 console.log(totalAge);
