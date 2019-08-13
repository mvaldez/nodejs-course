const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

geocode(address, (error, geoData) => {
    if (error) return console.log(error)

    console.log(geoData)

    const { lat, lon } = geoData

    forecast(lat, lon, (error, forecastData) => {
        if (error) return console.log(error)
        console.log('Data', forecastData)
    })
})
