require('dotenv').config()
const express = require('express')
const compression = require('compression')
const bodyParser = require('body-parser')
const helmet = require("helmet");
const cors = require('cors')

const routes = require('./src/routes')

const app = express()
app.use(compression())
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }))
app.use(bodyParser.json())
app.use(helmet())
app.use(cors())
app.use(routes)

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started at port: ${process.env.PORT}`)
})
