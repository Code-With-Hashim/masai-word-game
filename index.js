require('dotenv').config() //for env configuration
const express = require('express')
const cors = require('cors')

const { connect } = require('./config/db') //connection 
const { randomWordsRouter } = require("./router/random_words.router")
const { userDetailRouter } = require("./router/user_detail.router")

const app = express()
const PORT = process.env.PORT // PORT number come from .env file

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({
    origin: "*"
}))

app.use('/user', userDetailRouter)
app.use("/randomwords", randomWordsRouter)

app.get('/', (req, res) => res.send({ message: 'Hello World' }))
app.listen(PORT, async () => {
    try {

        await connect
        console.log('Database is Connected Succesfully'), // check is databse is connected
            console.log(`Listening on http://localhost:${PORT}`) // check is listening on PORt
    } catch (error) {
        console.log(error) // handel the error
    }
})