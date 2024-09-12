/*const reponse = await fetch(`http://localhost:5678/api/works`);
const projet =  reponse.json();
console.log(projet)*/

let works = [];

function displayAll(projects) {
    let newElements = '';
    for (let i = 0; i < projects.length; i++) {
        newElements += '<figure>' +
            '<img src=\"' + projects[i].imageUrl + '\" alt=\"' + projects[i].title + '\">' +
            '<figcaption>' + projects[i].title + '</figcaption>' +
        '</figure>';
    }
    
    document.getElementById('gallery').innerHTML = newElements;
}

const start = async function() {
    const response = await fetch(`http://localhost:5678/api/works`);
    response.json().then(data => {
        works = data;
        
        displayAll(data);
    })
}

function filter(idCategory){
    let newElements = '';

    for ( let i = 0; i < works.length; i++) {
        if ( works[i].category.id === idCategory) {
            newElements += '<figure>' +
                '<img src=\"' + works[i].imageUrl + '\" alt=\"' + works[i].title + '\">' +
                '<figcaption>' + works[i].title + '</figcaption>' +
            '</figure>';
        }
    }
    document.getElementById('gallery').innerHTML = newElements;
}

start()