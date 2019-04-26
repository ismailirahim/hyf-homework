let input = document.getElementById('search');
let btn = document.getElementById('btn');
let displaySection = document.getElementById('display_section')


function displayGif (request){
    for (let i = 0; i < request.data.length; i++) {
        let div = document.createElement('div')
        div.setAttribute('class', 'responsive')
        let image = document.createElement('img')
        displaySection.appendChild(div)
        div.appendChild(image)
        image.src = request.data[i].images.preview_webp.url
        image.setAttribute('width', '180px' )
        image.setAttribute('height', '180px')
    }
}

 function searchGif (){
     let ipnutValue = input.value
     fetch(`https://api.giphy.com/v1/gifs/search?q=${ipnutValue}&api_key=DfbsKAlSAcsGo1hJEknmTEQNM96I2q0l`)
    .then(response => response.json())
    .then((info) => {
        clearDisplay()
        displayGif(info)
    });
 }
// clear display after each search
 function clearDisplay(){
    let clear = document.getElementById('display_section')
    clear.innerHTML = '';
 }

 btn.addEventListener('click',searchGif)