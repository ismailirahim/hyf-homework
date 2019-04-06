

//The fastest presser in this realm


var btn = document.getElementById('btn');
var boxOne = document.getElementById('box_one');
var boxTwo = document.getElementById('box_two');
var p1Dsiplay = document.getElementById('p1_display');
var p2Dsiplay = document.getElementById('p2_display');
var keyPress = document.getElementById('wrapper');
var result = document.getElementById('win_result');
var reset = document.getElementById('reset');
var timer = document.getElementById('timer');
let playerOne = 1;
let playerTwo = 1;




// keyS and KeyL listener
function keyPres () {
    document.body.addEventListener('keypress', function(key){
        var x = key.which;
        let keyS = 115;
        let keyL = 108;
        if (x === keyS) {
            p1Dsiplay.innerHTML = playerOne++;
        }
        else if (x === keyL) {
            p2Dsiplay.innerHTML = playerTwo++;
        }
    });
}

// Countdown function
function countDown (sec, elem) {
    var element = document.getElementById(elem);
    element.innerHTML = sec;
    sec--;
    let timer = setTimeout('countDown('+ sec + ',"' + elem + '")', 1000);
    if(sec < 1 ) {
        clearTimeout(timer);
    }    
}

// Game conditions
function isGameOver () {
    if (playerOne === playerTwo) {
        result.innerHTML = 'Game is Draw';
    }
    else if (playerOne > playerTwo) {
        result.innerHTML = 'Key S is Winner';
    }
    else {
        result.innerHTML = 'Key L is Winner';
    }   
}
// Reset Button
reset.addEventListener('click',function resetGame () {
    location.reload();
});


// main function 
function gamePlay () {
    var input = document.getElementById('numImput').value;
    let inputValue = parseInt(input);
    timeToPlay = inputValue * 1000;
    if (input.length === 0) {
        alert ('Enter Time');
    }
    else {
        countDown(inputValue,'win_result');
        keyPres();
        setTimeout(isGameOver, timeToPlay);
    } 
}


btn.addEventListener('click', gamePlay);











































