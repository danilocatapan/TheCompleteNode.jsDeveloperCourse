const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    console.error('Please provide an andress!')
} else {
    geocode(address, (error, data) => {
        if (error) {
            return console.error(error)
        }

        forecast(-22.230414, -49.972216, (error, forecastData) => {
            if (error) {
                return console.error(error)
            }

            console.log(data.location)
            console.log(forecastData)
        })

    })
}