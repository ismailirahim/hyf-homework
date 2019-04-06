

// Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.

let timer = setTimeout(myFunction,2500);
function myFunction(){
    console.log('this is called after 2.5 seconds')
}


// // Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log out the stringToLog after delay seconds. Call the function you have created with some different arguments.

function timer1 (delay, stringToLog){
   let data = setInterval(string, delay);
   function string () {
       console.log(stringToLog);
   }
   clearInterval(data)
}
timer1(2.5, 'hello THere')



// Create a button in html. When clicking this button, use the function you created in the previous task to log out the text: 3.5 seconds after button is clicked 3.5 seconds after the button is clicked.

var btn = document.getElementById('btn');
btn.addEventListener('click', function(){
    
    let timer = setTimeout(myFunction,3500);
    function myFunction(){
        console.log('3.5 seconds after button is clicked')
    }
});


// Create two functions and assign them to two different variables. One function logs out Earth, the other function logs out Saturn. Now create a new third function that has one parameter: planetLogFunction. The only thing the third function should do is call the provided parameter function. Try call the third function once with the Earth function and once with the Saturn function.


var earth = function() {
    console.log('Earth');
}

var saturn = function() {
    console.log('Saturn')
}


var thirdFunc = function(planetLogFunction) {
        return planetLogFunction();
    }


// Create a button with the text called "Log location". When this button is clicked the location (latitude, longitude) of the user should be logged out using this browser api

var display = document.getElementById('display')
var btn1 = document.getElementById('btn1');
var img = document.getElementById('map')

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      display.innerHTML = 'Geolocation is not supported by this browser.';
    }
  }
  
  function showPosition(position) {
    display.innerHTML = 'Latitude: ' + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 
    let latiLong = position.coords.latitude + "," + position.coords.longitude;


  }


  btn1.addEventListener('click', getLocation)

// Create a function called runAfterDelay. It has two parameters: delay and callback. When called the function should wait delay seconds and then call the provided callback function. Try and call this function with different delays and different callback functions

let myFunctionOne = function(){
    console.log('hi there')
}
let myFunctiontwo = function(){
    console.log('hi there again')
}




function runAfterDelay(delay,callback) {
    let runTime = setTimeout(callback,delay)
    return runTime
}





// Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds. If a double click has been detected, log out the text: "double click!"

document.body.addEventListener('dblclick', function(){
    console.log('double click')
})


// Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function. If you set tellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke. And vice versa.

var logFunnyJoke = function () {
    return 'Job interviewer: “And where would you see yourself in five years’ time Mr. Jeffries? - Mr. Jeffries: Personally I believe my biggest weakness is in listening.'
}
 var logBadJoke = function () {
     return 'What’s black, red, black, red, black, red? - A zebra with a sun burn.'
 }

 function jokeCreator (shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
     if (shouldTellFunnyJoke) {
         logFunnyJoke()
     }
     else {
         logBadJoke()
     }
 }


jokeCreator(true,logFunnyJoke,logBadJoke);

 // Function as a variable


 // Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.

 let arrayOfFunctions = [
     function(){ console.log('first function')},
     function(){ console.log('second function')},
     function(){ console.log('third function')}
 ]
  
 var callingFunctions = function (arr){
    var data;
    for (var i = 0; i < arr.length; i++) {
       data = arr[i]();
    }
    return data
}
callingFunctions(arrayOfFunctions);
 

// Create a function as a const and try creating a function normally. Call both functions.

const constFunction = function() {
    console.log('this is a function as a CONST')
}
function normalFunction () {
    console.log('this is a normal function')
}

constFunction();
normalFunction();


// Create an object that has a key whose value is a function. Try calling this function.


var objectFunction = {
    firstFunction: function(){ console.log('first object function')},
    secondFunction: function(){ console.log('second object function')},
    thirdFunction: function(){ console.log('third object function')}
}

let callingObjectFunctions = function (obj) {
    Object.keys(obj).forEach(function(value) {
        console.log(obj[value]());
    });
}
callingObjectFunctions(objectFunction);


// Create a function (outer) that returns a function (inner). Call the outer function and assign the return to a variable. Now call this variable (that is the inner function)

let outer = function () {
   var inner = function () {
       console.log('this is the inner function')
   }
   return inner()
}
const inner = outer();