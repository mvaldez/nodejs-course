const request = require('request')

const token = 'pk.eyJ1Ijoic2t5c2ViIiwiYSI6ImNqejFycHN2YzAwcTgzZHBzbW9hb2N0eWYifQ.74b0Nyd5RlRmJ57PuMNEnw'

const forecast = (lat, lon, callback) => {

const url = 'https://api.darksky.net/forecast/0cebfb43b0f37ebae69a53455dbb9e5a/' + lat + ',' + lon

    request({url: url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', null)
        } else if (body.error) {
            callback(body.error, null)
        } else {
            callback(null, {
                temp: body.currently.temperature,
                precip: body.currently.precipProbability,
                summary: body.daily.data[0].summary
            })
        }
    })
}

module.exports = forecast
