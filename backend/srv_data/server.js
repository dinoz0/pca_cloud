// Import des modules
const express = require('express')
const cors = require('cors')
const path = require("path");
const checkTokenMiddleware = require('./middleware/jsonwebtoken/check')

// Import de la base de donnees
let DB = require('./db.config')

// Initialise l'API
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Import des modules de routage
const user_router = require('./route/user')
const cocktail_router = require('./route/cocktail')

// Mise en place du routeur
app.use("/images", express.static(path.join(__dirname, "images")))

app.get('/', (req, res) => res.send(`I'm online. It's good !`))

app.use('/users', checkTokenMiddleware, user_router)
app.use('/cocktails', cocktail_router)

app.all('*', (req, res) => res.status(501).send(`What the hell are you doing !?!`))

// Start serveur
DB.sequelize.authenticate()
    .then(() => console.log(`Database Connection OK`))
    .then(() => {
        app.listen(process.env.SERVER_PORT, () => {
            console.log(`This server is running on port ${process.env.SERVER_PORT}`)
        })
    })
    .catch(err => console.log(`Database Connection error`, err))
