const request = require('request')

const geocode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
        encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2t5c2ViIiwiYSI6ImNqejFycHN2YzAwcTgzZHBzbW9hb2N0eWYifQ.74b0Nyd5RlRmJ57PuMNEnw&limit=1'

    request({url: url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location service', null)
        } else if (body.features.length == 0) {
            callback('Unable to find location', null)
        } else {
            const lat = body.features[0].center[1]
            const lon = body.features[0].center[0]
            callback(null, {
                lat: lat,
                lon: lon,
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
