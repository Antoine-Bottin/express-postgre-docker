// Purpose: Main entry point for the application

// Importing the express module

const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => {
    console.log('GET')
    res.send('Get Route')
})

const userRouter = require('./routes/users')

app.use('/users', userRouter)

app.listen(port)
