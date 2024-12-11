// Write the code as shown in the video below:

// Write answer to the questions asked below:
// Write the code as shown in the video below:

// Write answer to the questions asked below:
const mainHeading = document.querySelector('#main-heading');
mainHeading.style.textAlign = 'center';




const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'green';
fruits.style.padding = '30px';
fruits.style.margin = '30px';
fruits.style.width = '50%';
fruits.style.borderRadius = '5px';
fruits.style.listStyleType = 'none';

const basketHeading = document.querySelector('h2');
basketHeading.style.marginLeft = '30px';
basketHeading.style.color = 'brown';

//Query selectorall
const friutItems = document.querySelectorAll('.fruit');
for (let i = 0; i < friutItems.length; i++) {
    friutItems[i].style.backgroundColor = 'white';
    friutItems[i].style.pading = '10px';
    friutItems[i].style.margin = '10px';
    friutItems[i].style.borderRadius = '5px';
}

const OddFruitItems = document.querySelectorAll('.fruit:nth-child(odd)');
for (let i = 0; i < OddFruitItems.length; i++) {
    OddFruitItems[i].style.backgroundColor = 'gray'
   
}
const EvenFruitItems = document.querySelectorAll('.fruit:nth-child(even)');
for (let i = 0; i < EvenFruitItems.length; i++) {
    EvenFruitItems[i].style.backgroundColor = 'brown'
    EvenFruitItems[i].style.color = 'white';
}
