let counter = 0
const slides = [
    {   title: 'Sport Cars',
        des: 'Ready for an incrediby luxurious experience?',
        text: 
        `
        When city lights call, the BMW 7 Series answers with understated opulence. Perfect for a night out, gala, or a high-end event, this luxury sedan offers an unparalleled blend of performance and comfort. Glide through city streets with a quiet confidence, impress at every red carpet, and enjoy an interior designed to make every moment memorable.
        `,
        image: 'assets/Classic12-sport1.jpg'
    },
    {   title: 'Weddings',
        des: 'Here we will have some text for weedings and celebrations',
        text: 
        `For those who adore the romance of a rustic countryside wedding, the Mini Cooper Cabriolet offers charm in spades. Imagine arriving at a vineyard venue, the top down, and the scent of wildflowers in the air. This playful, chic vehicle makes navigating country lanes a breeze while adding a vintage touch to your special day. It's perfect for couples who want their wedding to feel stylish, fun, and utterly unique.`,
        image: 'assets/Classic3.jpg'
    },
    {   title: 'Adventure',
        des: 'Adventure without limits',
        text: 'Venture deep into uncharted jungle trails with a Toyota Land Cruiser that laughs in the face of mud and river crossings. Its reliable performance and high ground clearance let you conquer terrains most vehicles wouldn’t dare to tread. Add camping gear, a few friends, and a thirst for the unknown, and you’ve got the makings of an unforgettable expedition.',
        image: 'assets/Classic7-4x4-.jpg'
    }
]

const slide = function(direction) { 
    if(direction == "left"){
        counter--
    }
    if(direction == "right") {
        counter++;
    }
    if (counter > slides.length-1) {
        counter = 0
    }
    if (counter < 0) {
        counter = slides.length -1
    }

    updateHTML()    
}

const updateHTML = function() {
    carouselimage = document.getElementById('image-card')
    carouselText = document.getElementById('text-current')
    carouselText.innerHTML = `
    <h3 class="title">${slides[counter].title}</h3>
    <span class="desc">${slides[counter].des}</span>
    <br>
    <p class="carousel-text">${slides[counter].text}</p>` 

    carouselimage.innerHTML = `<img id="image-current" class="image-carousel" src="${slides[counter].image}" alt="Sport car">`
}
updateHTML()
