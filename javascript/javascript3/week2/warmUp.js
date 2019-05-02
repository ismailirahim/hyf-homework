
// Movies exercise

let url = 'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json'

fetch(url)
.then(response => response.json())
.then(response => {

    // Create an array of bad movies:
 let badMovies = response.filter(data => data.rating < 4.5)
console.log(badMovies)
    //Creat an array of bad movies since year 2000
 let moviesSince2000 = badMovies.filter (data => data.year < 2000 )
   console.log(moviesSince2000)
    //Create an array of the titles of the bad movies since year 2000
   let titlesMovies2000 = moviesSince2000.map(data => data.title)
    console.log(titlesMovies2000)
 })


 // Promise that resolves after set time

function returnaPromise (resolveAfter) {
    return new Promise (function (resolve){
        setTimeout(() => {
            resolve('promise has resolved'); 
        },1000 * resolveAfter)
    })
}
returnaPromise(3)
    .then(function(data){
    console.log(data)
})



// Rewrite time


function setTimeoutPromise(time){
    return new Promise((resolve)=>{
        setTimeout(resolve,time)

    })
}

setTimeoutPromise(3000)
    .then(() => {
        console.log('Called after 3 seconds');
    });
// navigator.geolocation.getCurrentPosition 
var getPosition = function () {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }
  
  getPosition()
    .then((position) => {
      console.log(position);
    })
    .catch((err) => {
      console.error(err.message);
    });



// Fetching and waiting

    function getData (){
        return fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    }
    getData()
    .then(response => response.json())
    .then(data => {
        setTimeout(() => console.log(data),3000)})




