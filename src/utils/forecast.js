const request = require('request')

const forecast = (latitude, longitude, callback) => {
    // const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude
    const url="http://api.weatherstack.com/current?access_key=6cb539d3f2d516016e074b8157e863f3&query="+encodeURIComponent(latitude)+","+encodeURIComponent(longitude);
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            // callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
            callback(undefined,"Weather = "+body.current.weather_descriptions[0]+".It is currently "+body.current.temperature+" Celsius and feels like "+body.current.feelslike+" Celsius , There is a "+body.current.precip+"% chance of rain")
        }
    })
}

module.exports = forecast