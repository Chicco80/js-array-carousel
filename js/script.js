const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

let template ="";


let thumbTemplate = "";

let currentIndexActive = 0;
for(let i = 0; i < items.length; i++){
    let classActive = "";
    if ( i === currentIndexActive){
         classActive = "active";
}

    template += `
    <div class="item ${classActive}">
     <img src="${items[i]}" alt="Svezia">
      <div class="title">
        <h2>${title[i]}</h2>
        <p>${text[i]}</p>
      </div>
    </div>`;

    thumbTemplate += `
    div class="thumb ${classActive}">
      <img src="${items[i]}" alt="">
    </div>`
}
const itemsContainer = document.querySelector(".items-container");

const thumbsContainer = document.querySelector(".thumbs-container");
itemsContainer.innerHTML = template;
thumbsContainer.innerHTML += thumbTemplate;







    

