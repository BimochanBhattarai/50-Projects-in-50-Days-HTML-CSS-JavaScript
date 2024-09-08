let places = [
    {
        src:'./images/ankor_wat.jpg',
        placeName: 'Angkor Wat, Cambodia',
        info: 'Angkor Wat is a Hindu-Buddhist temple complex in Cambodia. Located on a site measuring 162.6 hectares within the ancient Khmer capital city of Angkor.'
    },
    {
        src: './images/borabora.jpg',
        placeName: 'Bora Bora, Island in French Polynesia',
        info:'Bora Bora is a small South Pacific island northwest of Tahiti in French Polynesia. Surrounded by sand-fringed motus (islets) and a turquoise lagoon protected by a coral reef'
    },
    {
        src: './images/grand_canyon.jpg',
        placeName:'Grand Canyon, USA',
        info:'The Grand Canyon in Arizona is a natural formation distinguished by layered bands of red rock, revealing millions of years of geological history in cross-section.'
    },
    {
        src: './images/machu_picchu_peru.jpg',
        placeName:'Machu Picchu, Peru',
        info:'Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley.'
    },
    {
        src: './images/Paris.jpg',
        placeName:'Paris, France',
        info:"France's magnetic City of Light is a perennial tourist destination, drawing visitors with its iconic attractions, like the Eiffel Tower and the Louvre."

    }
]

fillImages()

function fillImages(){
    document.getElementById("picture__contain").src = places[0].src
    document.getElementById("picture__title").innerText = places[0].placeName
    document.getElementById("picture__info").innerText = places[0].info
    i = 1
    setInterval(() => {
    if (i < places.length) {
        console.log(i);
        document.getElementById("picture__contain").src = places[i].src
        document.getElementById("picture__title").innerText = places[i].placeName
        document.getElementById("picture__info").innerText = places[i].info
        i = (++i) % places.length ;
        }
    }, 5000);
}

function gotoDashboard(){
   console.log( document.getElementsByClassName("picture__holder")[0].style.display='None')
}
