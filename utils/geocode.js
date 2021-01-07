const request = require('request')

const geocode = (address, callback) => {
  const url = 'http://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?limit=2&access_token=pk.eyJ1IjoidG9ueW9zdSIsImEiOiJja2hhMDR2M2YwdGx4MnhtenU1dHBsaDhhIn0.tSco6TH9vW3zq6EiU3992w'

  request({url: url, json: true}, (error, response) => {
    if (error) {
      callback('Unable to connect to location service!', undefined)
    } else if (response.body.features.length === 0) {
      callback('Unable to find location. Try another search', undefined)
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name
      })
    }
  })
}

module.exports = geocode