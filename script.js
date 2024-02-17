

const searchBox= document.querySelector(".search input");
const searchButton=document.querySelector(".search button")
const imgElement=document.querySelector(".weather-icon");

//Give the apiKey and apiURL from Open Weather Map.
const apiKey="enter your api key here";
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
async function getWeatherInfo(city_name){
    const resp=await fetch(apiURL + city_name + `&appid=${apiKey}`);
    var data= await resp.json();

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temperature").innerHTML=Math.round(data.main.temp) + "℃";
    document.querySelector(".humidity .value").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind .value").innerHTML=data.wind.speed + " km/h";
    document.querySelector(".pressure .value").innerHTML=data.main.pressure + " inHg";
    document.querySelector(".visibility .value").innerHTML=data.visibility + "mi";

    if(data.weather[0].main == "Clouds")
    {
        imgElement.src="./images/clouds.gif";
    }
    else if (data.weather[0].main == "Clear")
    {
        imgElement.src="./images/clear.gif";
    }
    else if (data.weather[0].main == "Rain")
    {
        imgElement.src="./images/rain.gif";
    }
    else if (data.weather[0].main == "Drizzle")
    {
        imgElement.src="./images/drizzle.gif";
    }
    else if (data.weather[0].main == "Mist")
    {
        imgElement.src="./images/mist.gif";
    }
    else if (data.weather[0].main == "Snow")
    {
        imgElement.src="./images/snow.gif";
    }
    else if (data.weather[0].main == "Thunderstorm")
    {
        imgElement.src="./images/thunderstorm.gif";
    }
    
    imgElement.title=data.weather[0].description;
    document.querySelector(".weather-details").style.display="block";
    document.querySelector("footer").style.position="relative";
    }
    searchButton.addEventListener("click",(city_name)=>{
    getWeatherInfo(searchBox.value);
    });