require('dotenv').config()
const { notFoundError, developmentErrors } = require('./handlers/error.handler')
const express = require('express')
const logger = require('morgan')
const path = require('path')
const port = process.env.PORT || 8999
const app = express()
app.use(logger('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/api/firstaids', require('./routes/firstaid.route'))
app.use('/api/home', require('./routes/home.route'))
app.use('/api/drugs', require('./routes/drug.route'))
app.use('/api/diseases', require('./routes/disease.route'))
app.use('/api/foodtips', require('./routes/foodtip.route'))
app.use('/api/symptoms', require('./routes/symptom.route'))
app.use('/api/news', require('./routes/news.route'))
app.use(notFoundError)
app.use(developmentErrors)

app.listen(port, () => console.log(`App listening at port ${port}`))
