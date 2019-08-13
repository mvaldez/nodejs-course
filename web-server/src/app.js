const path = require('path')
const express = require('express')

const pubDir = path.join(__dirname, '../public')

const app = express()

// static content
app.use(express.static(pubDir))


// routes
app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Sunny and Hot',
        location: 'Austin'
    })
})

// server
app.listen(3000, () => {
    console.log('server listening on port 3000')
})

