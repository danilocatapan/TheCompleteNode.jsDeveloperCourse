const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=6fb52bd99a9070bf1618370917db7494&query=-22.230414,%20-49.972216&units=m'

request({
    url: url,
    json: true
}, (error, response) => {

    //console.log(response.body.current)

    if (error) {
        console.log(error)
    } else {
        const {
            weather_descriptions,
            temperature,
            feelslike
        } = response.body.current;

        console.log(weather_descriptions[0] + '. It is currently ' + temperature + ' degress out. It feels like ' + feelslike + ' degress out.')
    }

})