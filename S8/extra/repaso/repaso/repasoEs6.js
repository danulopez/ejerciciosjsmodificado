//ARROW FUNCTIONS

function pepito(){
    console.log("hola pepito");
}


const pepitoArrow = () => {
    console.log("hola pepito arrow");
}


function suma(a, b){
    return a + b;
}

// const sumaArrow = (a, b) => {return a + b};
const sumaArrow = (a, b) =>  a + b;

console.log(sumaArrow(3,4));


//DESTRUCTURING
const persona = {
    nombre: "Sergio",
    apellido: "Pitel",
    edad: 36,
    ciudad: "Alcorcon",
    padres: [
        {
            name:"Carlos",
        },
        {
            name:"Maria",
        }
    ],
    saludo: () => console.log("saluda Sergio")
}

const {edad, ciudad, saludo} = persona;
console.log(edad, ciudad);
saludo();


const {padres, ...restoPersona} = persona;

console.log(restoPersona);



//SPREAD OPERATOR
const superheroes = ['Hulk', 'Spiderman', 'batman']
const villanos = ['joker', 'duende verde']

const personajes = [...superheroes, ...villanos]
console.log(personajes)


const superheroe = {
    name: 'Clark Kent',
    alias: 'Superman',
    power: 120
}

const datos = {
    ciudad: 'Madrid',
    pais: 'España'
}

const newSuperHeroe = {...superheroe, datos: {...datos}}
console.log(newSuperHeroe);



//MAP
// nuevoArray = array.mapear((elemento, index) => {DEVOLVEMOS LOS DATOS QUE QUERAMOS})

const heroes = [
    {
        name: "Peter Parker",
        alias: "Spiderman",
        power: 50
    },
    {
        name: "Clark Kent",
        alias: "Superman",
        power: 150
    },
    {
        name: "Bruce Banner",
        alias: "Hulk",
        power: 500
    },
    {
        name: "Bruce Wayne",
        alias: "Batman",
        power: 100
    }
]

const nombresSuperheroes = heroes.map((heroe) => {
    return {
        nombre: heroe.name, 
        alias: heroe.alias
    }
});
console.log(nombresSuperheroes)

const productos = [
    {
        nombre: 'Tomate',
        precio: 3
    },{
        nombre: 'Lechuga',
        precio: 1
    },{
        nombre: 'Jamon',
        precio: 90
    },{
        nombre: 'Solomillo',
        precio: 15
    }
]

const newProductos = productos.map((producto) => {
    return {
        nombre: producto.nombre,
        precio: 1.10 * producto.precio
    }
})

console.log(newProductos)


//FILTER
// nuevoarray = array.filtro((elemento) => EJECUTAMOS EL FILTRO QUE SEA)
const productosBaratos = productos.filter((producto) => producto.precio < 10);

console.log(productosBaratos)

const heroesFuertes = heroes.filter((heroe) => heroe.power >= 100  && heroe.alias === 'Superman')

console.log(heroesFuertes)


//FIND
// es como el filter pero solo nos devuelve el primer elemento que coincida

const heroeFuerte = heroes.find((heroe) => heroe.power >= 100 )
console.log(heroeFuerte)

const numeros = [50, 35, 89, 123, 89]
const numero = numeros.find((numero) => numero === 89)

console.log(numero)


//REDUCE
// acumulamos los valores de cada elemento en una variable acumulador

const totalPower = heroes.reduce((acc, heroe) => heroe.power + acc, 0);

console.log(totalPower)


const carrito = [
    {
        nombre: 'Tomate',
        precio: 3,
        cantidad: 10
    },{
        nombre: 'Lechuga',
        precio: 1,
        cantidad: 2
    },{
        nombre: 'Jamon',
        precio: 90,
        cantidad: 1
    },{
        nombre: 'Solomillo',
        precio: 15,
        cantidad: 2
    }
]

const totalCompra = carrito.reduce((acc, elemento) => acc + (elemento.precio * elemento.cantidad), 0)
console.log(totalCompra)