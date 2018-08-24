// const person = {
//     name: ['Paulo', 'Oliveira'],
//     age: 35,
//     job: 'designer',
//     say: function () {
//         console.log(`${this.name} ${this.job} ${this.age}`)
//     }
// }

// var neymar = new Player("Neymar", 25, "AT")
// console.log(neymar)

// let one = 1,
//     two = "two",
//     three = false,
//     four = one * (5 + 30),
//     five = null,
//     six;

// let card = [ "Romario", "Laudrup", "Bergkamp", "Stojkovic" ]
// let clubs = [ "Ajax", "Juventus" ]

// for (var who = 0; who < card.length; who++) {
//     for (var where = 0; where < clubs.length; where++) {
//         console.log(card[who] + ' plays for ' + clubs[where])
//     }
// }

// for (var i=0; i < four; i++) {
//     console.log(i)
// }

// while (one < 5) {
//     console.log(one);
//     one++;
// }

// console.log(one, two, three, four, five, six)
// console.log( typeof(five) )

// console.log(card.length)
// card.shift();                                       // tira o primeiro item
// card.push("Zidane");                                // insere como último item
// let player = card.pop();                            // tira o último item
// card.splice(1, 1, "Platini", "Weah", "Baggio" );    // a partir do item 1, remove 2 itens da array [ 1, 2 ]

// console.log(card.length)
// console.log(player)

// card.forEach(console.log)

// for (p of card) {
//     console.log(p)
// };

// let Laudrup = {}
// let VanBasten = new Player("Marco", 29, "CF")

// Laudrup.name = "Michael"
// Laudrup.age = 32

// console.log(Laudrup, VanBasten)

// var Player_ = {
//     name: "Stone",
//     age: 32,
//     club: "Milan"
// }

// var autoplayer = (function(){
//     return "Lose yourself to dance!"
// }())

// alert(autoplayer)


// console.log(Player_)

// export {myexport};

// let myexport = 1;

var navbar = document.getElementById('navbar');
var wrapper = document.querySelector('.wrapper');
var box = document.getElementById('box');

const obj = {
    a: "venus",
    b: "a",
    c: 3
};
const {a, b} = obj;
console.log(obj);

const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5);


document.addEventListener('scroll', () => {
    var position = window.pageYOffset;
    var wrapper = document.querySelector('.wrapper');
    var last = document.getElementById('last-grid');

    if (position > navbar.scrollHeight){
        navbar.classList.add("sticky"); 
        box.classList.add('final');
    } else {
        navbar.classList.remove('sticky');
        box.classList.remove("final");
    }

    if (position > wrapper.scrollHeight) {
        box.classList.add('fixed');
        navbar.style.opacity = 1;
    } else {
        box.classList.remove("fixed");
    }
})

box.addEventListener('click', () => {
    box.style.opacity = 0;
})

let addBox = document.querySelector(".add-box");
let addText = document.querySelector(".add-text");
let clearText = document.querySelector(".clear-text");
let text = document.querySelector('.text');
textCopy = text.textContent;

addBox.addEventListener('click', function(){
    newItem = document.createElement("div");
    newItem.classList.add('text-copy');
    text.appendChild(newItem);
})

addText.addEventListener('click', function(){
    
    
    if(text.lastChild.textContent != "") {
        text.lastChild.previousSibling.textContent = textCopy;
    } else {
        text.lastChild.textContent = textCopy;
    }
})

clearText.addEventListener('click', function(){  
    if(text.lastChild.textContent == "") {
        text.lastChild.remove();
    } else {
        text.lastChild.textContent = "";
    }
})







