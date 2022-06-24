// Import des modules
const express = require('express')
let router = express.Router()

const authCtrl = require('../controller/auth')

// Time Middleware
router.use( (req, res, next) => {
    const event = new Date()
    console.log(`AUTH TIME:`, event.toString())
    next()
})

router.post('/login', authCtrl.login)
router.put('/signup', authCtrl.signup)

module.exports = router