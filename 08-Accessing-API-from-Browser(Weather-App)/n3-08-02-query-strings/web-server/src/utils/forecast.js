const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=6fb52bd99a9070bf1618370917db7494&query=${latitude},${longitude}&units=m`


    console.log(url)
    request({
        url,
        json: true
    }, (error, {
        body
    }) => {
        console.log(body)

        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unabled to find location', undefined)
        } else {
            const {
                weather_descriptions,
                temperature,
                feelslike
            } = body.current;
            callback(undefined, weather_descriptions[0] + '. It is currently ' + temperature + ' degress out. It feels like ' + feelslike + ' degress out.')
        }
    })
}

module.exports = forecast