const https = require('https')
const url = 'http://api.weatherstack.com/current?access_key=6fb52bd99a9070bf1618370917db7494&query=-22.230414,%20-49.972216&units=m'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()