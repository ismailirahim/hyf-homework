// Doubling of number

let numbers = [1, 2, 3, 4];
let newNumbers = numbers.filter(x => x % 2 !== 0).map(x => x * 2);
console.log(newNumbers)

// 1. movies with short titles

const shortTitles = movies.filter(movie => movie.title.length < 8);
console.log(shortTitles);

// 2. movies with long titles

const longTitles = movies.filter(movie => movie.title.length > 8);
console.log(longTitles)

// 3. number of movies made between 1980-1989

const filteredMovies = movies.filter(movie => movie.year >= 1980 && movie.year <= 1989)
console.log(filteredMovies);

// 4. extra key called tag 

let movieOf = movies.map( movie => {
    if (movie.rating >= 7) {
    movie.tag = "Good" 
    }
    else if (movie.rating >= 4 && movie.rating < 7) {
    movie.tag = "Average"
    }
    else if ( movie.rating < 4) {
    movie.tag = "Bad"
    }
   return movie
})
 console.log(movieOf)

 // 5. Chaining

const higherMovies = movies
    .filter(movie => movie.rating > 6)
    .map(movie => movie);
console.log(higherMovies)


// 6. Count the total number of movies

let count = 0;
movies.forEach(function (movie){
    
    if (movie.title.includes('Surfer')) {
        count++
    }
    else if (movie.title.includes('Alien')) {
        count++
    }
    else if (movie.title.includes('Benjamin')) {
        count++  
    }
}) ;
console.log(count);

// 9. Average by rating
let average = movies.map(movie => movie.rating);
let averageResult = average.reduce((total, num) =>  total + num) / average.length;
console.log('The total average of movies by rating is ' + averageResult)    