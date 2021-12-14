//creo array titoli
//creo array paragrafi
//ogni volta che clicco su next carico il titolo successivo ed il paragrafo successivo
//arrivati all'ultimo titolo/paragrafo ricominciare da capo 

const arrayHeadLines = ['Breaking News', 'Lorem ipsum dolor sit amet', 'New Technological Applications'];
const arrayParagraphs = [
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi eaque provident beatae fugit similique, veritatis tempore vitae laudantium cum architecto odit. Deleniti dicta nobis laudantium porro perspiciatis rerum expedita? Voluptatibus.', 
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam reprehenderit autem ea possimus quibusdam nobis sequi, modi quaerat nemo voluptates, quos officiis rerum, aperiam cupiditate iure vel tempore? Vitae, omnis.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quod necessitatibus iusto non quae vel adipisci facere quidem iure sed ullam ratione veniam hic autem saepe culpa, velit impedit blanditiis?.', 
];
const images = [
    'https://www.abbaermanno.com/wp-content/uploads/2020/12/breaking-news-blog-1138x658-1.jpg',
    'https://images.indianexpress.com/2021/05/News-Showcase.jpg',
    'https://i.ytimg.com/vi/QSfn6uhrPJk/maxresdefault.jpg'
]

let currentIndex = 0;

const title = document.querySelector('.title');
const paragraph = document.querySelector('.paragraph');
const image = document.querySelector('.box-images')

const previousButton = document.querySelector('.button-previous');
const nextButton = document.querySelector('.button-next');

title.innerHTML = arrayHeadLines[currentIndex];
paragraph.innerHTML = arrayParagraphs [currentIndex];
image.src = images[currentIndex]

//PREVIOUS BUTTON
/*
previousButton.addEventListener('click', function() {
    currentIndex--;
    if (currentIndex > arrayHeadLines.length - 1) {
        currentIndex = 0;
    }
    title.innerHTML = arrayHeadLines[currentIndex];
    paragraph.innerHTML = arrayParagraphs [currentIndex];
    if (currentIndex > images.length - 1) {
        currentIndex = 0;
    }
    image.src = images[currentIndex]
})
*/

//NEXT BUTTON
nextButton.addEventListener('click', function() {
    currentIndex++;
    if (currentIndex > arrayHeadLines.length - 1) {
        currentIndex = 0;
    }
    title.innerHTML = arrayHeadLines[currentIndex];
    paragraph.innerHTML = arrayParagraphs [currentIndex];

    if (currentIndex > images.length - 1) {
        currentIndex = 0;
    }
    image.src = images[currentIndex]
})