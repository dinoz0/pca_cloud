// Import des modules
const express = require('express')
const cors = require('cors')

// Initialise l'API
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Import des modules de routage
const mail_router = require('./route/mailer')

// Mise en place du routeur
app.get('/', (req, res) => res.send(`I'm online. It's good !`))

app.use('/send', mail_router)

app.all('*', (req, res) => res.status(501).send(`What the hell are you doing !?!`))

// Start serveur
app.listen(process.env.SERVER_PORT, () => {
    console.log(`This server is running on port ${process.env.SERVER_PORT}`)
})

