let counter = 0
const list = ['img 1 - initial', 'img 2', 'img 3', 'img 4', 'img 5', 'img 6']
const slides = [
    {   title: 'Sport Cars',
        des: 'Ready for an incrediby luxurious experience?',
        text: 'test: When city lights call, the BMW 7',
        imag: 'Classic12-sport1.jpg'
    },
    {   title: 'Weddings',
        des: 'Here we will have some text for weedings and celebrations',
        text: 'More bulky text about weedings',
        imag: 'Classic11-wedding.jpg'
    },
    {   title: 'Adventure',
        des: 'Adventure without limits',
        text: 'ready for mooooore text for adventures',
        imag: 'Classic7-4x4-.jpg'
    }
]

const slide = function(direction) {
    prevButton = document.querySelector('.previous')
    next = document.querySelector('.next') 
    imageHide = document.getElementById('image-current')
    imageDisplay = document.getElementById('image-replace')

    console.log(imageHide, imageDisplay)

    const position = {current: list[counter]}

    if(direction == "left"){
        if(counter < 0) {
            return
        }
        counter--            
        position.previous = list[counter+1]
        position.next = list[counter+1];
    } else if(direction == "right") {
        if(counter >= list.length-1) {
            return
        }
        counter++;
        position.next = list[counter+1]
        position.previous = list[counter-1]        
    }
    position.current = list[counter]
    console.log(position, counter)
}
