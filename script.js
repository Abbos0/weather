const Place = document.querySelector(".place")
const Day = document.querySelector(".day")
const Clock = document.querySelector(".clock")
const Temp = document.querySelector(".temp")
const Mist = document.querySelector(".mist")
const Temp1 = document.querySelector(".temp1")
const Temp2 = document.querySelector(".temp2")
const Input = document.querySelector("#input")


const changeHandler = ()=>{
    const SecretKey = '8933fcfd1e22f162fc583a46dfa2d836'
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Input.value}&appid=${SecretKey}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            Temp.innerHTML =`${Math.round(data.main.temp - 273)}   C ° `
            Place.innerHTML = data.name
            Mist.innerHTML = data.weather[0].main
            Temp1.innerHTML = ` ${Math.round(data.main.temp_max - 273)}   C ° `
            Temp2.innerHTML = ` ${Math.round(data.main.temp_min - 273)}   C ° `

        })

        Input.value = ""
}




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
    (now.getHours() >12 ? (now.getHours() -12) :   "0" + now.getHours()) + " : " +
    (now.getMinutes() >=10 ? now.getMinutes() : "0" + now.getMinutes() ) + " : " +
    (now.getSeconds() >=10 ? now.getSeconds() : "0" + now.getSeconds()) + 
    (now.getHours() >=12 ? "    pm" : "   am");
    
}

setInterval(Timeline,1000)