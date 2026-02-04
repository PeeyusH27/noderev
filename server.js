const express = require('express')
const cors = require('cors')
require('dotenv').config()
const PORT = process.env.PORT

const app = express()

app.use(cors({
    origin: ['http://127.0.0.1:5500', 'http://localhost:5500']
}))

app.get('/', (req, res) => {
    res.send('This is coming from express backend')
})

app.get('/message', (req, res) => {
    res.json({message : 'This is the message'})
})

app.listen(PORT, () => {
    console.log('Port is listening to: ', PORT)
})