/***********************************/
/*** Import des module nécessaires */
const express = require('express')
const checkTokenMiddleware = require('../middleware/jsonwebtoken/check')
const multer = require("../middleware/multer/multer.config");

const cocktailCtrl = require('../controller/cocktail')

/***************************************/
/*** Récupération du routeur d'express */
let router = express.Router()

/*********************************************/
/*** Middleware pour logger dates de requete */
router.use( (req, res, next) => {
    const event = new Date()
    console.log('Cocktail Time:', event.toString())
    next()
})

/**************************************/
/*** Routage de la ressource Cocktail */

router.get('', cocktailCtrl.getAllCocktails)

router.get('/:id', cocktailCtrl.getCocktail)

router.put('', checkTokenMiddleware, multer, cocktailCtrl.addCocktail)

router.patch('/:id', checkTokenMiddleware, multer, cocktailCtrl.updateCocktail)

router.delete('/:id', checkTokenMiddleware, cocktailCtrl.deleteCocktail)

module.exports = router