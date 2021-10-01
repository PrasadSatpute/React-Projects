const express = require('express')
const app = express()
const port = 3090

//middelware
const middelware = (req,res,next) => {
  console.log("Hello Middelware")
  next();
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user', middelware, (req, res) => {
  res.send('user')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})