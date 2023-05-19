const input$$ = document.querySelector('input');

function imprimir(event) {
    console.log(event.target.value);
    
}
input$$.addEventListener('focus', imprimir);
