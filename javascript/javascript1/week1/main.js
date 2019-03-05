//Age-ify (A future age calculator)

var yearOfBirth = 1988;
var yearFuture = 2038;
var age;
age =  yearFuture - yearOfBirth;

console.log ("You will be " + age + " years old in " + yearFuture);


//Goodboy-Oldboy (A dog age calculator)

var dogYearOfBirth = 2010;
var dogYearFuture = 2021;
var dogYear;
var humanYear;
var shouldShowResultInDogYears = false ;

humanYear = dogYearFuture - dogYearOfBirth;
dogYear = humanYear * 7;

if (shouldShowResultInDogYears) {
    console.log("your dog will be " + dogYear + " dog years old in " + dogYearFuture);
}
else {
    console.log("your dog will be " + humanYear + " human years old in " + dogYearFuture);
}

//Housey pricey (A house price estimator)


//Julia 

var width = 5;
var height = 11;
var deep = 8;
var gardenSizeInM2 = 70;
var housePrice;
var currentPrise = 1000000;
var volumeInMeters = width * height * deep;


housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300
currentPrise =  housePrice - currentPrise;
console.log ("Julia's house price is " + numberWithCommas(housePrice) + " milion kroner and she is paying " + numberWithCommas(currentPrise) + " kroner less")

//Peter

var width = 8;
var height = 10;
var deep = 10 ;
var gardenSizeInM2 = 100;
var housePrice;
var currentPrise = 2500000;
var volumeInMeters = width * height * deep;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
currentPrise =  currentPrise - housePrice;

console.log ("Peter's house prise is " + numberWithCommas(housePrice) + " milion kroner and he is paying " + numberWithCommas(currentPrise) + " kroner more"  )


// This function is oly for separating numbers with  ,

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
     x = x.replace(pattern, "$1,$2");
   return x;
}

//Ez Namey (Startup name generator) Optional

var firstWords = ["Cuter", "Beaut", "Gtalk", "Brainy", "Kiddily"];
var secondWords = ["corp", "corporation", "store", "phone", "pc"];
var numberRandom = Math.floor(Math.random()*6) + 0;
var startupName;

startupName = firstWords[numberRandom] + " " + secondWords[numberRandom];

var charactersLength = firstWords[numberRandom].length + secondWords[numberRandom].length

console.log("The startup : " + " \"" + startupName + "\" " + " contains " + charactersLength + " characters")
