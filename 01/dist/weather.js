
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

    function getWeatherInfo(weather){
        console.log(weather);
        console.log(typeof(weather));
        return currentWeather;
    }
    
    function matchWeatherAndImage(){
        if(currentWeather == "Clouds"){
            //  her skal jeg lave noget kode som kan indsætte korrekt billede
            console.log("hej");
        }
    }
    setTimeout(matchWeatherAndPicture, 2000);

    let weatherImageElement = document.querySelector(".weather-image");

    let  = function getWeatherPicture(){
        for (var key in arguments[0]) {
            let listItem = document.createElement("li");
            listItem.classList.add("slide");
            let link = document.createElement("a");
            // tlføj evt class på link. 
            let image = document.createElement("img");
            image.classList.add("slide__image");
            slideshowContainer.insertAdjacentElement("beforeend", listItem);
            listItem.insertAdjacentElement("afterbegin", link);
            link.insertAdjacentElement("afterbegin", image);
            image.setAttribute("src", imageFolder[key]);
            // okay, her tager vi lige den hurtige løsning:
            
        }
    }(imageFolder);

 

});