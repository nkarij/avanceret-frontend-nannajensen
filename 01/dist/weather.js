
let weatherChangeImageFolder = {
    Sun: "IMG/weather/sun.png",
    Clouds: "IMG/weather/cloud.png",
    Rain: "IMG/weather/rain.png",
    Snow:"IMG/weather/snow.png"
}

const apiDatabaseURL = "http://api.openweathermap.org/data/2.5/weather?";
const weatherLocation = "id=2618425&units=metric";
const apiKeyId = "&APPID=8acbc6e8a7dc23dc79a92890a707d33b";
const weatherImageElement = document.querySelector(".weather-image");
const temperatureDegreesElement = document.querySelector(".forecast__grader"); 

fetch(apiDatabaseURL + weatherLocation + apiKeyId)
.then((response)=>{
    // console.log(response);
    return response.json();
})
.then((weather)=>{

    let currentWeather = weather.weather[0].main;
    // console.log(currentWeather);

    getWeatherInfo(currentWeather);
    matchWeatherAndImage();

    // den her return er vigtig (selvom jeg ikke helt forstår hvorfor...)
    function getWeatherInfo(weather){
        // console.log(weather);
        // console.log(typeof(weather));
        return currentWeather;
    }

    function matchWeatherAndImage(){
        if(currentWeather == "Clouds"){
            getWeatherPicture("Clouds");
            setCorrectTemperature();
        }
        if(currentWeather == "Clear"){
            getWeatherPicture("Sun");
            setCorrectTemperature();
        }
        if(currentWeather == "Rain"){
            getWeatherPicture("Rain");
            setCorrectTemperature();
        }
        if(currentWeather == "Snow"){
            getWeatherPicture("Snow");
            setCorrectTemperature();
        }

    }

    function getWeatherPicture(keystring){
        // let imageSource = weatherChangeImageFolder[keystring];
        // console.log(imageSource);
        weatherImageElement.setAttribute("src", weatherChangeImageFolder[keystring]);

    }

    function setCorrectTemperature(){
        let currentTemperatur = weather.main.temp;
        // console.log(currentTemperatur);
        temperatureDegreesElement.innerHTML = currentTemperatur;
    }
    

});