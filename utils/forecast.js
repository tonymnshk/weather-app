const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=22ad421bddc47d5946a7087c613bd8bd&query=' + latitude + ',' + longitude + '&units=f'

  //query = 40.7831,-73.9712
  //Pass latitude and longitude coordinates to the API
  //const url = 'http://api.weatherstack.com/current?access_key=22ad421bddc47d5946a7087c613bd8bd&query=37.8267,-122.4233&units=f'

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect weather service!', undefined)
    } else if (response.body.error) {
      callback('Unable to find location', undefined)
    } else {
      const message = response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like '
        + response.body.current.feelslike + ' degrees out.'
      callback(undefined, message)
    }
  })
}

module.exports = forecast