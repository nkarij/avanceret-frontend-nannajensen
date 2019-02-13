
let weatherChangeImageFolder = {
    Sun: "IMG/weather/sun.png",
    Clouds: "IMG/weather/cloud.png",
    Rain: "IMG/weather/rain.png",
    Snow:"IMG/weather/snow.png"
}

let apiDatabaseURL = "http://api.openweathermap.org/data/2.5/weather?";
let weatherLocation = "q=Copenhagen,dk";
let apiKeyId = "&APPID=8acbc6e8a7dc23dc79a92890a707d33b";

fetch(apiDatabaseURL + weatherLocation + apiKeyId)
.then((response)=>{
    // console.log(response);
    return response.json();
})
.then((weather)=>{

    let currentWeather = weather.weather[0].main;
    getWeatherInfo(currentWeather);
    matchWeatherAndImage();

    function getWeatherInfo(weather){
        console.log(weather);
        console.log(typeof(weather));
        return currentWeather;
    }
    
    function matchWeatherAndImage(){
        if(currentWeather == "Clouds"){
            //  her skal jeg lave noget kode som kan indsætte korrekt billede
            getWeatherPicture(Clouds);
            console.log("hej");
        }
    }
    setTimeout(matchWeatherAndPicture, 2000);

    let weatherImageElement = document.querySelector(".weather-image");

    let  = function getWeatherPicture(keystring){
        weatherImageElement.setAttribute("src", imageFolder[keystring]);
        weatherImageElement.src
    }(weatherChangeImageFolder);

});