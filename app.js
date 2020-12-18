const express = require('express');

const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv/config')
//Middlewares
//Hmmmmmm buraya auth işlemi geliyo mesela. O işlemden sonra posts sayfasının asıl görveini görebiliyoruz. Şimdi anladığğğm
// app.use('/posts', () => {
//     console.log("We are in middleware on something posts")
// })
app.use(bodyParser.json())
//Import Routes
const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute)

//Routes
app.get('/', (req,res) => {
    res.send(`We are on home`)
})


mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true  }, () => {
    console.log("Mongoose is connected")
})

app.listen(3000);