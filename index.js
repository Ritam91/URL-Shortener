const express = require('express')
const mongoose = require('mongoose')

const app = express()

//Middleware
app.use(express.json())
app.set('view engine', 'ejs')

const db = 'mongodb://127.0.0.1/url'

mongoose
    .connect(db, {
        
    }).then(() => console.log('Database connected'))
    .catch(err => console.log('Database connection error : '+err))

app.use('/', require('./routes/url'))

app.listen(5000, () => console.log('Server is running on PORT 5000'))
