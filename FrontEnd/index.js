/*const reponse = await fetch(`http://localhost:5678/api/works`);
const projet =  reponse.json();
console.log(projet)*/

const start = async function() {
    const response = await fetch(`http://localhost:5678/api/works`);
    response.json().then(data => {
        //console.log(value)
        /*<figure>
			<img src="assets/images/abajour-tahina.png" alt="Abajour Tahina">
			<figcaption>Abajour Tahina</figcaption>
		</figure>*/

        let newElements = '';
        
        for (let i = 0; i < data.length; i++) {
            newElements += '<figure>' +
                '<img src=\"' + data[i].imageUrl + '\" alt=\"' + data[i].title + '\">' +
                '<figcaption>' + data[i].title + '</figcaption>' +
            '</figure>';
        }

        document.getElementById('gallery').innerHTML = newElements;
    })
}

start()