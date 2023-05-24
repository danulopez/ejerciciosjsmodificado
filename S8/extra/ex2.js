//Para este ejercicio vamos a obtener y pintar en el html una serie de notas del diario de nuestro queridísimo Eliot. 
//Para ello deberemos ejecutar el comando que comentabamos anteriormente y hacer un .fetch() a la url `http://localhost:3000/diary`.
//Una vez tengas los datos tenemos que ordenarlos por fecha de menor a mayor con la propiedad .date. 
//Nuestro carismático personaje es un poco caótico y escribe las notas en páginas salteadas...
//Cuando lo tengas crea un div para cada nota del diario e introduce un ``<h3>``, un  ``<h5>`` y un ``<p>`` 
//para su .title, .date y .description respectivamente.
//Finalmente añade un botón para poder eliminar las notas del diario. En concreto hay una que a Eliot no le apetece recordar mucho...
    
    
   


const getDiary = () => {
    fetch ('http://localhost:3000/diary')
    .then 
}

function init() {
    getDiary();
}

async function createDiary (){
    const response = await fetch('http://localhost:3000/diary')
    const diaryNotes = await response.json();
    console.log(diaryNotes);
    printDiary(diaryNotes);
   
}

function printDiary (notes) {
    for (const note of diary) {
        const container$$ = document.createElement('div');
        
        container$$.innerHTML= `
        <h3>${note.title}</h3>
        <h5>${note.date}</h5>
        <p>${note.description}</p>
        `
          
                
    document.body.appendChild(container$$)
    }

}
init ()