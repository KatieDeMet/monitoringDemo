const express = require('express')
const app = express()
const path = require('path')

app.use(express.json())

const port = process.env.PORT || 4040

const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: '290b9a910c98447c8c942f3e817d1b20',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

rollbar.log('Hello world!')

app.get('/', function(req, res) { 
    rollbar.log('App.get hit')
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.listen(port, () => console.log("Chug, chug"))