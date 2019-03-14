


// Flight booking fullname function

function getFullName (firstname, surname, useFormalName) {
    if (!firstname.trim() && !surname.trim()){
        return "Please enter your Name and Surname"
    }
    else if (useFormalName === true) {
        return "Lord " + firstname + " " + surname;
    } else {
        return firstname + " " + surname;
    }


}

var fullname1 = getFullName("Rahim", "Ismaili", true);
var fullname2 = getFullName("Rahim", "Ismaili", false);



// Event application



function getEventWeekday (event) {
    
    var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var currentDate = new Date();
    var day = currentDate.getDay();
    var x;
    x = (day + event) % 7 ; 
    return "The event is on: " + weekDays[x];
}


// Weather wear

function weatherWear (temp) {
if (temp <= 0) {
    return "A pair of Dark Jeans, sweater and Parka Jacek "
} else if (temp > 0 && temp <= 10){
    return "Jeans, long-sleeved sweater and Jacket "
} else if (temp > 10 && temp <= 20){
    return "Jeans and T-shirt"
}else {
    return "Shorts and T-shirt"
}
}








// Student manager

var class09Students = [];

function addStudentToClass (studentName) {
  
    if ( class09Students.length >= 6 && studentName !== "queen") {
        console.log("Cannot add more students to class 09")
    } else if (class09Students.includes(studentName)) {
        console.log("Student " + studentName + " is already in the class")
    } else if (!studentName.trim()) {
        console.log("You cannot add an empty string to a class")
    } else {
        class09Students.push(studentName)
    }
}

function getNumberOfStudents() {
    return class09Students.length
}





// Candy helper

var boughtCandyPrice = [];

function addCandy (candyType, weight) {
    var candys = [
        {name: "sweet",
         price: 0.03},
        {name: "chocolate",
         price: 0.5},
        {name: "toffe",
         price: 1.1},
        {name: "chewing-gum",
         price: 0.03},
    ];
    for (let i = 0; i < candys.length; i++) {
        var name = candys[i].name;
        var price = candys[i].price;
        if (name === candyType) {
            var total = price * weight;
            boughtCandyPrice.push(total);
        }
        }
        return boughtCandyPrice;

}
     
function canBuyMoreCandy () {
    var amountToSpend = Math.random() * 100;
    var buyMoreCandy = 0;
    for (let i = 0; i < boughtCandyPrice.length; i++) {
        buyMoreCandy += boughtCandyPrice[i];
    } if (buyMoreCandy < amountToSpend) {
        console.log("You can buy more, so please do!")
    } else {
        console.log("Enough candy for you!")
    }    
}

