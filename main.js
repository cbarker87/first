//Functions that change the crag images when the buttons are clicked
let montaguImagelist = ["images/montagu.jpg", "images/legoland.jpg", "images/waterworld.jpg"]
let montaguCounter = 1;

function nextmontaguimage2(){
    let img=$(".montaguimage")[0]
    img.src = montaguImagelist[montaguCounter]
    console.log(montaguCounter)
    console.log(montaguImagelist[montaguCounter])
    montaguCounter = montaguCounter +1
    if (montaguCounter > montaguImagelist.length -1){
        montaguCounter = 0
    }
}

let rocklandsImageList = ["images/rocklands1.jpeg", "images/rocklands2.jpg", "images/rocklands3.jpg"]
let rocklandsCounter = 1;

function nextRocklandsImage(){
    let img=$(".rocklandsimage1")[0]
    img.src = rocklandsImageList[rocklandsCounter]
    console.log(rocklandsCounter)
    console.log(rocklandsImageList[rocklandsCounter])
    rocklandsCounter = rocklandsCounter + 1
    if (rocklandsCounter > rocklandsImageList.length - 1){
        rocklandsCounter = 0
    }
}

let oudtshoornImageList = ["images/oudtshoorn.jpg", "images/oudtshoorn2.jpg", "images/oudtshoorn3.jpg"]
let oudtshoornCounter = 1;

function nextOutdshoornImage(){
    let img=$(".oudtshoornimage1")[0]
    img.src = oudtshoornImageList[oudtshoornCounter]
    console.log(oudtshoornCounter)
    console.log(oudtshoornImageList[oudtshoornCounter])
    oudtshoornCounter = oudtshoornCounter +1
    if (oudtshoornCounter > oudtshoornImageList.length -1){
        oudtshoornCounter = 0
    }
}

let theholeImageList = ["images/thehole.jpg", "images/thehole2.jpg", "images/thehole3.jpg"]
let theholeCounter = 1;

function nexttheholeimage(){
    let img=$(".theholeimage1")[0]
    img.src = theholeImageList[theholeCounter]
    console.log(theholeCounter)
    console.log(theholeImageList[theholeCounter])
    theholeCounter = theholeCounter +1
    if (theholeCounter > theholeImageList.length -1){
        theholeCounter= 0
    }
}

//Functions that reference the current weather
MONTAGU_WEATHER = {temp:00, weather: "Blank", humidity:00, wind: "Blank"}
OUDTSHOORN_WEATHER = {temp:00, weather:"Blank", humidity:00, wind: "Blank"}
THEHOLE_WEATHER = {temp:00, weather:"Blank", humidity:00, wind: "Blank"}
ROCKLANDS_WEATHER = {temp:00, weather:"Blank", humidity:00, wind: "Blank"}

function montaguWeather(){
    $(".montaguTemp").text("Temperature: " + MONTAGU_WEATHER.temp + "\u2070C");
    let montaguIcon = $("#montaguIcon")
    if(MONTAGU_WEATHER.weather == "Clear"){
        montaguIcon.attr("src", "images/Clear.png")
    }
    if(MONTAGU_WEATHER.weather == "Partly cloudy"){
        montaguIcon.attr("src", "images/Partlycloudy.png")
    }
    if(MONTAGU_WEATHER.weather == "Cloudy"){
        montaguIcon.attr("src", "images/Cloudy.png")
    }
    if(MONTAGU_WEATHER.weather == "Sunny"){
        montaguIcon.attr("src", "images/Sunny.png")
    }
    if(MONTAGU_WEATHER.weather == "Patchy rain possible"){
        montaguIcon.attr("src", "images/Patchyrainpossible.png")
    }
    $(".montaguHumidity").text("Humidity: " + MONTAGU_WEATHER.humidity + "%");
    $(".montaguWind").text("Wind: " + MONTAGU_WEATHER.wind + "kph");
}

function rocklandsWeather(){
    $(".rocklandsTemp").text("Temperature: " + ROCKLANDS_WEATHER.temp + "\u2070C");
    let rocklandsIcon = $("#rocklandsIcon")
    if (ROCKLANDS_WEATHER.weather == "Sunny"){
        rocklandsIcon.attr("src", "images/Sunny.png")
    }
    if (ROCKLANDS_WEATHER.weather == "Partly cloudy"){
        rocklandsIcon.attr("src", "images/Partlycloudy.png")
    }
    if (ROCKLANDS_WEATHER.weather == "Clear"){
        rocklandsIcon.attr("src", "images/Clear.png")
    }
    if (ROCKLANDS_WEATHER.weather == "Cloudy"){
        rocklandsIcon.attr("src", "images/Cloudy.png")
    }
    if (ROCKLANDS_WEATHER.weather == "Patchy rain possible"){
        rocklandsIcon.attr("src", "images/Patchyrainpossible.png")
    }
    $(".rocklandsHumidity").text("Humidity: " + ROCKLANDS_WEATHER.humidity + "%");
    $(".rocklandsWind").text("Wind: " + ROCKLANDS_WEATHER.wind + "kph");
}

function oudtshoornWeather(){
    $(".oudtshoornTemp").text("Temperature: " + OUDTSHOORN_WEATHER.temp + "\u2070C");
    let oudtshoornIcon = $("#oudtshoornIcon")
    if(OUDTSHOORN_WEATHER.weather == "Clear"){
        oudtshoornIcon.attr("src", "images/Clear.png")
    }
    if(OUDTSHOORN_WEATHER.weather == "Partly cloudy"){
        oudtshoornIcon.attr("src", "images/Partlycloudy.png")
    }
    if(OUDTSHOORN_WEATHER.weather == "Sunny"){
        oudtshoornIcon.attr("src", "images/Sunny.png")
    }
    if(OUDTSHOORN_WEATHER.weather == "Cloudy"){
        oudtshoornIcon.attr("src", "images/Cloudy.png")
    }
    if(OUDTSHOORN_WEATHER.weather == "Patchy rain possible"){
        oudtshoornIcon.attr("src", "images/Patchyrainpossible.png")
    }
    $(".oudtshoornHumidity").text("Humidity: " + OUDTSHOORN_WEATHER.humidity + "%");
    $(".oudtshoornWind").text("Wind: " + OUDTSHOORN_WEATHER.wind + "kph");
}

function theholeWeather(){
    $(".theholeTemp").text("Temperature: " + THEHOLE_WEATHER.temp + "\u2070C");
    let theholeIcon = $("#theholeIcon")
    if(THEHOLE_WEATHER.weather == "Sunny"){
        theholeIcon.attr("src", "images/Sunny.png")
    }
    if(THEHOLE_WEATHER.weather == "Partly cloudy"){
        theholeIcon.attr("src", "images/Partlycloudy.png")
    }
    if(THEHOLE_WEATHER.weather == "Clear"){
        theholeIcon.attr("src", "images/Clear.png")
    }
    if(THEHOLE_WEATHER.weather == "Cloudy"){
        theholeIcon.attr("src", "images/Cloudy.png")
    }
    if(THEHOLE_WEATHER.weather == "Patchy rain possible"){
        theholeIcon.attr("src", "images/Patchyrainpossible.png")
    }
    $(".theholeHumidity").text("Humidity: " + THEHOLE_WEATHER.humidity + "%");
    $(".theholeWind").text("Wind: " + THEHOLE_WEATHER.wind + "kph");
}

//function to diplicate repetitive lines of code
function setWeather(weatherObject, data){
    weatherObject.temp = data.current.temp_c
    weatherObject.weather = data.current.condition.text
    weatherObject.humidity = data.current.humidity
    weatherObject.wind = data.current.wind_dir + " at " + data.current.wind_kph
}

//Functions that get weather apis from APIXU
function montaguApi(){
    $.get("http://api.apixu.com/v1/current.json?key=6557b785ae204e648d1154333192308&q=-33.7682966,20.0542136",
    function(data){
        setWeather(MONTAGU_WEATHER, data)
        montaguWeather();
    });
}

function rocklandsApi(){
    $.get("http://api.apixu.com/v1/current.json?key=6557b785ae204e648d1154333192308&q=clanwilliam",
    function(data){
        setWeather(ROCKLANDS_WEATHER, data)
        rocklandsWeather();
    });
}

function oudtshoornApi(){
    $.get("http://api.apixu.com/v1/current.json?key=6557b785ae204e648d1154333192308&q=Oudtshoorn",
    function(data){
        setWeather(OUDTSHOORN_WEATHER, data)
        oudtshoornWeather();
      });
}

function theholeApi(){
    $.get("http://api.apixu.com/v1/current.json?key=6557b785ae204e648d1154333192308&q=muizenberg",
    function(data){
        setWeather(THEHOLE_WEATHER, data)
        theholeWeather();
      });
}

//Three day forecast functions


MONTAGU_WEATHER3 = {maxtemp_c:00, mintemp_c:00, avghumidity:00, maxwind_kph:00, condition: "Blank"}
OUDTSHOORN_WEATHER3 = {maxtemp_c:00, mintemp_c:00, avghumidity:00, maxwind_kph:00, condition: "Blank"}
THEHOLE_WEATHER3 = {maxtemp_c:00, mintemp_c:00, avghumidity:00, maxwind_kph:00, condition: "Blank"}
ROCKLANDS_WEATHER3 = {maxtemp_c:00, mintemp_c:00, avghumidity:00, maxwind_kph:00, condition: "Blank"}

function oudtshoornWeather3(){
    $(".oudtshoornMaxTemp").text("Temperature: " + OUDTSHOORN_WEATHER3.maxtemp_c + "\u2070C");
    let oudtshoornIcon = $("#oudtshoornIcon")
    if(OUDTSHOORN_WEATHER3.condition == "Sunny")
        oudtshoornIcon.attr("src", "images/Sunny.png")
}

function oudtshoornApi3(){
    $.get("http://api-cdn.apixu.com/v1/forecast.json?key=6557b785ae204e648d1154333192308&q=oudtshoorn&days=3",
    )
}

//JQuery code to call the weather functions when the page loads
$( document ).ready(function() {
    montaguWeather()
    oudtshoornWeather()
    theholeWeather()
    rocklandsWeather()
    montaguApi()
    oudtshoornApi()
    theholeApi()
    rocklandsApi()
});

//Live web cams
//Montagu: http://www.climbing.co.za/montagu-web-cam/