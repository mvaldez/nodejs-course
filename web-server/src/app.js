const path = require('path')
const express = require('express')
const hbs = require('hbs')

const pubDir = path.join(__dirname, '../public')
const viewDir = path.join(__dirname, '../templates/views')
const partialsDir = path.join(__dirname, '../templates/partials')

const app = express()

// handle bars
app.set('view engine', 'hbs')
app.set('views', viewDir)
hbs.registerPartials(partialsDir)

// static content
app.use(express.static(pubDir))


// routes
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Mark'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        })
    }
    res.send({
        forecast: 'Sunny and Hot',
        address: req.query.address
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Mark'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Mark'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        errorMessage: 'Article not found',
        name: 'Mark',
        title: '404'
    })
})

// this needs to be last route
// the wildcard will catch any
// route that has not matched yet
app.get('*', (req, res) => {
    res.render('404', {
        errorMessage: 'Page not found',
        title: '404',
        name: 'Mark'
    })
})

// server
app.listen(3000, () => {
    console.log('server listening on port 3000')
})

