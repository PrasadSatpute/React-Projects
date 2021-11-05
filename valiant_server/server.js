const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors('*'))
app.use(bodyParser.json())

// routers
const routerUser = require('./routers/user')
const routeraddtable = require('./routers/addtable')

// add the routers
app.use('/user', routerUser)
app.use('/addtable', routeraddtable)

// static routing
// any file in uploads directory does not require any route
// express will simply return any file from uploads directory
// app.use(express.static('uploads'))

app.listen(3300, '0.0.0.0', () => {
  console.log('server started on port 3300')
})
