const express = require('express')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const nodemailer = require('nodemailer')
const path = require('path')
const { request, response } = require('express')

const app = express()

// View engine setup
app.engine('handlebars',exphbs())
app.set('view engine','handlebars')

// Static folder
app.use('public',express.static(path.join(__dirname,'public')))

// Body Parser Middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/',(request,response) => {
    response.render('contact')
})

app.listen(4000, () => console.log('server started on port 4000'))