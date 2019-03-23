

//Remove the item in numbersArray that is equal to randomNumber

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const randomNumber = parseInt(Math.random() * 11);
for (let i = 0; i < numbersArray.length; i++) {
       if(randomNumber === numbersArray[i]) {
         numbersArray.splice (i, 1)
       }
}
 
console.log(numbersArray)


//   Series duration of my life


const seriesDurations = [
    {
      title: "Vikings",
      days: 2,
      hours: 2,
      minutes: 36,  
    },
    {
      title: "Breaking Bad",
      days: 1,
      hours: 22,
      minutes: 30,
    },
    {
      title: "Fringe Division",
      days: 3,
      hours: 4,
      minutes: 40,
    },
    {
      title: "The Flash",
      days: 3,
      hours: 8,
      minutes: 40,
    }
  ]

  let total = 0;

  for (let i in seriesDurations) {
    
    let movie = seriesDurations[i].title 
    let day = seriesDurations[i].days * 24
    let hours = seriesDurations[i].hours
    let minutes = seriesDurations[i].minutes / 60
    let calc = (day + hours + minutes) / (80 * 365 * 24) * 100;
    let movie = seriesDurations[i].title 
    total += calc
   
   
    console.log (movie + " took " + calc.toPrecision(3) + "% of my life") // The toPrecision() method returns a string representing the Number object to the specified precision.
   
  } 
    console.log ("In Total that is " + total.toPrecision(3) + "% of my life " )




// My favorite songs

const songDatabase = [];

function addSongToDatabase (song) {
  var newSong = new Object;
  newSong.songId = songDatabase.length + 1;
  newSong.title = song.title
  newSong.artist = song.artist
  
  songDatabase.push(newSong)
}

var songOne = {title:"My baby",
               artist: "Soggy socks"};
var songTwo = {title:"3 nails in wood",
               artist: "The carpenters"};
var songThree = {title:"Blacker than black",
               artist: "Instant coffe"};
var songFour = {title:"When is enough too little",
               artist: "The spies girls"};


addSongToDatabase(songOne);
addSongToDatabase(songTwo);
addSongToDatabase(songThree);
addSongToDatabase(songFour);



// Function fot getting song by it's title 
function getSongByTitle (title){
 var result;
    for (var i = 0; i < songDatabase.length; i++) {
        if(songDatabase[i].title === title) {
        result = songDatabase[i]
        }
    }
  return result
}



const myPlaylist = [];

function addSongToMyPlaylist (title, playlist) {
    let song = getSongByTitle(title); 
     playlist.push(song)
}

console.log(addSongToMyPlaylist("When is enough too little",myPlaylist))


console.log(myPlaylist)







//  NOnoN0nOYes (Note taking app)


var notes = [];

function addNote (content, id) {
 var obj = {};
  obj.content = content;
  obj.id = id;
  notes.push(obj);
}

  addNote("hello there", 1)
  addNote("hello world", 2)
  addNote("copenhagen", 3)

 
 
 
function getNoteFromId (id){
  var result;
  for (var i = 0; i < notes.length; i++) {
    if(isNaN(id)){
     throw "ERROR"
    }
    else if (notes[i].id === id) { 
     result = notes[i].content
    }  
  }
    return result
}

console.log(getNoteFromId(1))
console.log(getNoteFromId(2))
console.log(getNoteFromId(3))


function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log("The note with id:" + notes[i].id + ", has the following note text:"  + notes[i].content + ".")     
  }
}
logOutNotesFormatted();




// CactusIO-interactive (Smart phone usage app)

var activities = [];


function addActivitiy(activity, duration) {
  var curentDate = new Date();
  var date = curentDate.getDate()
  var month = curentDate.getMonth() + 1
  var year = curentDate.getFullYear()
  var dateFormat = date + "/" + month + "-" + year

  var obj = {}
  obj.date = dateFormat;
  obj.activity = activity;
  obj.duration = duration;
  
  activities.push(obj)
  
}

addActivity("youtube", 50);
addActivity("facebook", 40);
addActivity("slack", 90)



function showStatus(arr) {

  if (arr.length === 0) {
    return "Add some activities before calling showStatus";
  }
  else if (arr.length > 0) {
    var timeSpend = 0;
    var timeLimit = 190;
    for (var i = 0 ; i < arr.length; i++){
      timeSpend += arr[i].duration;
    }
    if (timeSpend >= timeLimit) {
      return "You have reached your limit, no more smartphoning for you!"
    }
    else {
      return "You have " + (timeLimit - timeSpend) + " more min to spend "
    }
  }
}

console.log(showStatus(activities))














