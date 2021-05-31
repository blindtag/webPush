const express = require('express')
const webpush = require('web-push')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const publicVapidKey ='BMf0Og_kw2-OEUbsKuWRvA3mW5bJ8y4dE9BhJXRHmhmEPNZ3WG5jhFeKGRVeKwi8HzzvoUZC51FuIs3X6ix6wGI'
const privateVapidKey ='DI7nr5DvU0ZP9IZGhCDGjdfchcSWutVBnIfPQodhz-k'

webpush.setVapidDetails('mailto:test@test.com', publicVapidKey, privateVapidKey)

//Create subscribe route
