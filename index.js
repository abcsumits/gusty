const API_KEY="d1845658f92b31c64bd94f06f7188c9c"
async function showWeather(){
  let city ="goa"
  const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
  const data=await response.json()
  console.log("Weather data:->"+${data})
  let newPara=document.createElement('p')
  newPara.textContent=`${data?.main?.temp?.toFixed(2)} °C`
  document.body.appendChild(newPara)
}
