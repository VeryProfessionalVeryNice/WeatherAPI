    
var weather;
var jsObject;

var httpRequest = new XMLHttpRequest();
httpRequest.open("get", "https://api.openweathermap.org/data/2.5/weather?id=4409896&APPID=6b7dbd48c31b7d9ba094e329f803f475&units=metric");
httpRequest.send(null);
httpRequest.onreadystatechange = aFunction;

function aFunction(){
    if(httpRequest.readyState == 4){
      var weatherReport = httpRequest.responseText;
      console.log(weatherReport);
      jsObject = JSON.parse(weatherReport);
      console.log = jsObject;
      document.getElementById("temp").innerHTML = jsObject.main.temp + " degrees celsius";
      
    document.getElementById("description").innerHTML = jsObject.weather[0].description;
      document.getElementById("location").innerHTML = jsObject.name;
    document.getElementById("weather").innerHTML = jsObject.weather[0].main;
    }}


    // function setup() {

//   loadJSON('https://api.openweathermap.org/data/2.5/weather?id=4409896&APPID=6b7dbd48c31b7d9ba094e329f803f475&units=metric', gotData);

// }

// var jsonWeatherString = JSON.stringify(httpRequest);

// function gotData(data) {
//     weather = data;
//   }

 


// var obj = {
//     latitude : 37,
//     longitude: -122,
//     currently : {
//         summary : "clear",
//         humidity : 0.93
//     }
// }

// var jsonSTRING = JSON.stringify(obj);
// console.log(jsonSTRING);

// var backToObject = JSON.parse(jsonSTRING);
// console.log(backToObject);



// function draw() {
//   background(0);
//   if (weather) {
//     fill(255);
//     ellipse(100,100, weather.main.temp, weather.main.temp);
//     ellipse(300,100, weather.main.humidity, weather.main.humidity);
//   }

// }

// function populateWeather(){
//     if (weather)
//     {
//         cityName = weather.city.name;
//         document.getElementById("cityname").innerHTML = cityName;
//     }
// }

