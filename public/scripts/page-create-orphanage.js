//create map
const map = L.map('mapid').setView([-27.222633,-49.6455874], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//creat icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

//create and add marker
map.on('click', (event) => {
     const lat = event.latlng.lat;
     const lng = event.latlng.lng;

     document.querySelector('[name=lat]').value = lat;
     document.querySelector('[name=lng]').value = lng;

     // remove icon
     marker && map.removeLayer(marker)

     //add icon layer
     marker = L.marker([lat, lng], {icon})
     .addTo(map);
    
})



// adicionar o campo de fotos
function addPhotoField() {
    //pegar um container de fotos #images
    const container = document.querySelector('#images')
    // pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da ultima imagem adicionada.
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)
    
    //verificar se o campo esta vazio, se sim não add ao container de imagens.
    const input = newFieldContainer.children[0]

    if(input.value == '') {
        return
    }
    
    //limpar o campo antes de adicionar ao container de imagens.
    input.value = ''

    //adicionar o clone ao container de imagens
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2) {
        //limpar valor do campo
        span.parentNode.children[0].value = ""

        return
    }

    //deletar o campo
    span.parentNode.remove();
}

//select yes or no
function toggleSelect(event) {


    //retirar a class .active (dos botões)
    document.querySelectorAll('.button-select button')
    .forEach(function(button){
        button.classList.remove('active');
    })

    // colocar a class .active nesse botão clicado
    const button = event.currentTarget
    button.classList.add('active')


    //att o meu input hidden com o valor selecionados
    const input = document.querySelector('[name="open_on_weekends"]')
    
    input.value = button.dataset.value
}

//DESAIO TERMINAR
function validade(event){
    // validar se lat e lng estao preenchidos
    //1 pegar o campo com document.querySelector
    //verificar se no value dele esta vazio
    //se value estiver vazio, fazer um evento no prevent default
    const needsLatAndLng = true; // quando a pessoa selecionar vira false
    if(needsLatAndLng) {
        event.preventDefault()
        alert('Selecione um ponto no mapa')
    }
    
}