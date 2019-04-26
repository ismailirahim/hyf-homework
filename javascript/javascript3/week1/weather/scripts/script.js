
let btn = document.getElementById   ('button');
let input = document.getElementById('input_city')
let header = document.getElementById('mian_header')
let weatherInfo = document.getElementById('weather_info')
let buttonLocation = document.getElementById('location')
let display = document.getElementById('display')
let cityName;

buttonLocation.addEventListener('click',getLocation)


// Get the weather by location 
function getCityByLocation (lat,lon){
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6f7ef7a9fe25ab961ed052229ba8c3b6`
    fetch(url)
    .then(response => response.json())
            .then((info) => {
            weatherApp(info)
            });
}

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } 
  }

function showPosition(position) {
  lat = position.coords.latitude 
  lon = position.coords.longitude; 
  getCityByLocation(lat,lon)
}

  
  // Get the weather by City 
const getCity = function () {
    cityName = input.value;
    if(cityName.length === 0) {
        alert ("Please Enter City")
      }  
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6f7ef7a9fe25ab961ed052229ba8c3b6`)
      .then(response => response.json())
      .then((info) => {
          console.log(info)
        weatherApp(info)
        });
  }

  btn.addEventListener('click', getCity)




  function weatherApp (serverRequest){
      let city = document.getElementById('city')
      city.innerHTML = serverRequest.name;
      let day = document.getElementById('day')
      day.innerHTML = getDay()
      let keys = Object.values(serverRequest.weather[0]);
      let weatherIcon = document.getElementById('weather_icon')
      let imgSource = keys[3];
      weatherIcon.src = imageSource(imgSource);
      weatherIcon.setAttribute('width', '200px')
      weatherIcon.setAttribute('height', '200px')
      let weatherDescription = document.getElementById('weather_description')
      weatherDescription.innerHTML = serverRequest.weather[0].description.charAt(0).toUpperCase() + serverRequest.weather[0].description.slice(1);
      let temp = document.getElementById('temp')
      temp.innerHTML = convertCelsius(serverRequest.main.temp)
      let humidity = document.getElementById('humidity')
      humidity.innerHTML = serverRequest.main.humidity + '%'
      let windSpeed = document.getElementById('windSpeed')
      windSpeed.innerHTML = serverRequest.wind.speed + "m/s"
  }



  // Weather icone 
  function imageSource(imgSource) {
      let source = `https://openweathermap.org/img/w/${imgSource}.png`
      return source
  }


  // Kelvin to Celsius 
  function convertCelsius (temp) {
      let fahrenheit = temp * (9/5) - 459.67;
      let celsius = (fahrenheit -32) / 1.8
      return Math.floor(celsius)
  }
  // Get the current day 
  function getDay () {
      let date = new Date();
      let d = date.getDay()
      let weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
      let day = weekDays[d]
      return day
  }
  


