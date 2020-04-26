const path = require('path')
const express = require('express')

//console.log(__dirname)
//console.log(__filename)
//console.log(path.join(__dirname, '../public'))

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')

// Setup hendlebars engine and views locations
app.set('view engine', 'hbs')
app.set('views', viewsPath)

// Setup static directory to server
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Danilo Catapan'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Danilo Catapan'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Is is snowing',
        location: 'Iowa'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})