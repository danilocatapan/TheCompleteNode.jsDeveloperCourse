const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('São Paulo', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

forecast(-22.230414, -49.972216, (error, data) => {
    console.error(error)
    console.log('Data', data)
})