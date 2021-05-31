const express = require('express')
const webpush = require('web-push')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'client')))

const publicVapidKey ='BMf0Og_kw2-OEUbsKuWRvA3mW5bJ8y4dE9BhJXRHmhmEPNZ3WG5jhFeKGRVeKwi8HzzvoUZC51FuIs3X6ix6wGI'
const privateVapidKey ='DI7nr5DvU0ZP9IZGhCDGjdfchcSWutVBnIfPQodhz-k'
webpush.setVapidDetails('mailto:test@test.com', publicVapidKey, privateVapidKey)

//Create subscribe route
app.post('/subscribe', (req, res)=>{
    //Get push subscription object 
    const subscription= req.body
    //resource crested
    res.status(201).json({})
    //Create payload
    const payload = JSON.stringify({title: 'PushTest'})
    //Pass object into sendNotification
    webpush.sendNotification(subscription, payload).catch(err => console.err(err))
})
const port = 5000
app.listen(port, ()=> console.log(`Server running on port ${port}`))