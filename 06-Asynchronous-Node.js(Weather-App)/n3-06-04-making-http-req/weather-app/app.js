const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=6fb52bd99a9070bf1618370917db7494&query=-22.230414,%20-49.972216'

request({
    url: url
}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})