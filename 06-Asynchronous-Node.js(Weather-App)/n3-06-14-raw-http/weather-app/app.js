const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    console.error('Please provide an andress!')
} else {
    geocode(address, (error, {
        latitude,
        longitude,
        location
    }) => {
        if (error) {
            return console.error(error)
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.error(error)
            }

            console.log(location)
            console.log(forecastData)
        })

    })
}