// 1. (Main theme: Programming Basics)
// Write a function that logs to the console numbers 1 to 100.
// However, if the number is divisible by 3 it should log to the console "This is divisible by 3"
// If it's divisible by 5 it should log "This is divisible by 5"
// If it's divisible by both 3 and 5 it should log "Jackpot!"
// Hint: use the modulo operator (%) to figure out if two numbers are divisible. Make sure the remainder is 0.
// An example: 14 is divisible by 7, because 14 ÷ 7 = 2 exactly. 11 is not divisible by 7.

// 2. (Main theme: DOM manipulation)
// Using JavaScript, create a button and add it to the html (the document)
// When the button is clicked, insert an <img> tag to the html with a random image

// 3. (Main theme: Async API calls)
// Make an API call using the Fetch API. Make use of the following API: https://reqres.in/api/users
// Display the first_name of the first three users in the DOM

let body = document.querySelector('body');

//1.
var numbers = new Array(100);
var counter = 100;
function printNumbers() {
    for (var num = 1; num < 101; num++) {
        // check if the number is divisible by 3 or 5

        for (var num = 1; num < 100; num++) {

            // check if the number is divisible by 3 or 5
            var checkForThree = num % 3;
            var checkForFive = num % 5;

            // if the number is divisible by both 3 and 5, then print FizzBuzz
            if (checkForFive === 0 && checkForThree === 0)
                console.log("JACKPOT");
            else if (checkForThree === 0) {
                console.log('This is divisible by 3')
            } else if (checkForFive === 0) {
                console.log('This is divisible by 5 ')
            }


            console.log(num);
        }

    }
}
printNumbers();
//2.
let images = [
    'images/cat1.jpg',
    'images/cat2.jpg',
    'images/cat3.jpg'
];

let btn = document.createElement('button');

body.appendChild(btn);
btn.innerHTML = 'click me ';
btn.addEventListener('click', function () {
    console.log('hello');
    let image = document.createElement('img');
    let randomNumber = Math.floor(Math.random() * 3);
    image.src = images[randomNumber];
    image.setAttribute('width', '200px');
    image.setAttribute('heigth', '200px');
    body.appendChild(image);
});

// 3.
fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(info => {
        console.log(info.data);
        let ul = document.createElement('ul');
        info.data.forEach(element => {
            console.log(element.first_name);
            let li = document.createElement('li');
            li.innerHTML = element.first_name;
            ul.appendChild(li);
        });

        // append Elements to the DOM
        body.appendChild(ul);
    });
