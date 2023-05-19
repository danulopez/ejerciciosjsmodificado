const countries = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];
    
    for (const country of countries) {
        const div$$ = document.createElement('div');
        const h4$$ = document.createElement('h4');
        h4$$.textContent = country.title;
        const img$$ = document.createElement('img');
        img$$.setAttribute('src',country.imgUrl);
        div$$.appendChild(h4$$)
        div$$.appendChild(img$$);
       document.body.appendChild(div$$);     
    }

    const button$$ =document.querySelector('button');

    button$$.addEventListener('click', function () {
        const allDiv$$ = document.body.querySelectorAll('div');
        allDiv$$[allDiv$$.length - 1].remove();
    })

//Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine ese mismo elemento del html.

