const Place = document.querySelector(".place")
const Day = document.querySelector(".day")
const Clock = document.querySelector(".clock")
const Weather_icon = document.querySelector(".icon_weather")
const Temp = document.querySelector(".temp")
const Description = document.querySelector(".description")
const Temp_max = document.querySelector(".temp_max")
const Temp_min = document.querySelector(".temp_min")
const Input = document.querySelector("#input")

const Container = document.querySelector(".container")
const Weather = document.querySelector(".weather")



const OpenWeather = ()=>{
    const SecretKey = '8933fcfd1e22f162fc583a46dfa2d836'
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Input.value}&appid=${SecretKey}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            Temp.innerHTML =`${Math.round(data.main.temp - 273)}   C ° `
            Place.innerHTML = data.name
            Description.innerHTML = data.weather[0].main
            Temp_max.innerHTML = ` ${Math.round(data.main.temp_max - 273)}   C ° `
            Temp_min.innerHTML = ` ${Math.round(data.main.temp_min - 273)}   C ° `

            Container.style.backgroundImage = `url(https://source.unsplash.com/600x900/?${data.name})`
            Weather.style.backgroundImage = `url(https://source.unsplash.com/600x900/?${data.name})`

            if(data.weather[0].main === "Clouds"){
                Weather_icon.innerHTML = '☁️'
              }
              else if(data.weather[0].main === "Thunderstorm"){
                 Weather_icon.innerHTML = '⚡️'
              }
              else if(data.weather[0].main === "Snow"){
                Weather_icon.innerHTML = '❄️'
              }
              else if(data.weather[0].main === "Sunny"){
                Weather_icon.innerHTML = '☀️'
              }
              else if(data.weather[0].main === "Rain"){
                Weather_icon.innerHTML = '🌨'
              }
              else{
                Weather_icon.innerHTML = '😃'
              }



              
            SendMessage(data)
        })
        
        Input.value = ""
}


// time =======================================================================================


const Week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const Month = ["January","February","March","April","May","June","July","August","September","October","April","November","December"]  
   


function Timeline(){
    var now = new Date()

    document.getElementById("date").innerHTML =
    Week[now.getDay()] + " , "+
    Month[now.getMonth()] + " " +
    now.getDate() + " , " +
    now.getFullYear() ;

    document.getElementById("time").innerHTML =
    (now.getHours() >12 ? (now.getHours() - 12) :   "0" + now.getHours())  + " : " +
    (now.getMinutes() >=10 ? now.getMinutes() : "0" + now.getMinutes() ) + " : " +
    (now.getSeconds() >=10 ? now.getSeconds() : "0" + now.getSeconds()) + 
    (now.getHours() >=12 ? "    pm" : "   am");
    
}
setInterval(Timeline,1000)

// time =======================================================================================

// telegram botga =============================================================================

const SendMessage = (weather) =>{
    search = `%0A  Kiritilyotgan mamlakat: ${weather.name} %0A ☁️ Harorat: ${Math.round(weather.main.temp - 273)}  C ° %0A ☁️ Xarorat: ${weather.weather[0].main} `
    chat_id = -1002128588085
    token = `6834109969:AAEhUkHL4MsMs8Be2CWGY9oC7KXSbW8JHAM`
    url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${search}&parse_mode=html`

    let api = new   XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
}   

// telegram botga =============================================================================