export const getWeather = async(city)=>{
    const key = "b20beacd0fc54ce685c161735240205"
    const url =`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no&lang=es
    `
    const response = await fetch(url)
    const weather=await response.json()

    return(weather)
}