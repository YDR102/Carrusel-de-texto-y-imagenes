const carrusel = [
    {
        id: 1,
        person: "David Ruano",
        titulo: "Desarrollador Web",
        subTitle: "Front-end",
        img: "https://mymodernmet.com/wp/wp-content/uploads/2022/06/vijay-suddala-smartphone-moon-photography-1.jpg",
        info: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum officiis 
        dolorem quae voluptas maxime adipisci nostrum praesentium rerum iure, 
        iusto cupiditate similique minus cum soluta suscipit voluptates consequuntur. 
        Illum, similique! Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Tenetur eligendi officiis quos.`
    },
    {
        id: 2,
        person: "Radha Platòn",
        titulo: "Anaslista de datos",
        subTitle: "Anaslista y Socia de Crecimiento",
        img: "https://dus6dayednven.cloudfront.net/app/uploads/2021/02/SEBASTIAN-PRADO.jpg",
        info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Consequuntur quibusdam omnis suscipit dicta quas doloribus a
        minus tenetur cum explicabo aliquam ducimus, 
        ipsam impedit vitae repudiandae nam fugiat? Illo, deleniti?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Omnis maiores aliquam, aperiam sequi vero`
    },
    {
        id: 3,
        person: "David & Radha Ruano",
        titulo: "Matrimonio Joven",
        subTitle: '"Hechos el uno para el otro"',
        img: "img.jpg", 
        info: `Para el cielo. Puede que las palabras para expresar cuánto te amo se me escapen, 
        pero siempre trataré de compensar a través de mis actos de amor y cariño, 
        te amor eres el amor de mi vida. Eres el sol que ilumina mi vida y mi camino al cielo nunca lo olvides. 
        Para mi ángel más dulce, de la luna que te vigila`
    }
];
const img = document.getElementById('img')
const Name = document.getElementById('person')
const subTitle = document.getElementById('subTitle')
const info = document.getElementById('info')
const titulo = document.getElementById('titulo')

const prevBtn = document.querySelector('.prev')
const netxBtn = document.querySelector('.next')
const randomBtn = document.querySelector('.random')

//* item de inicio
let currentItem = 0;

//* llamar item al cargar la pagina
// window.addEventListener('DOMContentLoaded', function() {
//     showPerson();
// });
function showPerson(){
    const item = carrusel[currentItem];
    img.src = item.img;
    Name.textContent = item.person;
    subTitle.textContent = item.subTitle;
    info.textContent = item.info;
    titulo.textContent = item.titulo
};

// sigiente item
netxBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > carrusel.length -1) {
        currentItem = 0;
    }
    showPerson();
});

//anterior item
prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0) {
        currentItem = carrusel.length - 1;
    }
    showPerson();
});

//Random item
//! sin acabar
randomBtn.addEventListener('click', function(){
    carrusel[getRandomNumber()]
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
};