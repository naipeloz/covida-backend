require('dotenv').config();
var express = require('express')
var bodyParser= require('body-parser')
var mongoose = require('mongoose')
var path = require('path')
var cors = require('cors');
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var mainRouter = require('./src/routes/index')
var zoneRouter = require('./src/routes/zone')
var sectionRouter = require('./src/routes/section')
var categoryRouter = require('./src/routes/category')

var dbUrl = process.env.MONGODB_URI

var app = express()

// view engine setup
app.use(logger('dev'))
app.use(express.json())
app.use(cors({
    origin: '*'
}))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'build')))

// connect to database
mongoose.Promise = global.Promise
mongoose.connect(
    dbUrl,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

app.use('/', mainRouter)
app.use('/zone', zoneRouter)
app.use('/section', sectionRouter)
app.use('/category', categoryRouter)

module.exports = app

