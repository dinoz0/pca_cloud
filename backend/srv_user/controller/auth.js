// Import des modules 
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../model/user')

// Routage du module Auth
exports.login = async (req, res) => {
    const { email, password } = req.body

    // Vérification des datas
    if(!email || !password){
        return res.status(400).json({message: `Bad email or password`})
    }

    try{
        // Recherche de l'utilisateur
        let user = await User.findOne({ where: {email: email}, raw: true})
        if(user === null){
            return res.status(401).json({ message: `This account does not exists !`})
        }

        // Verification du mot de passe
        let test = await bcrypt.compare(password, user.password)
        if(!test){
            return res.status(401).json({ message: `You are too stupid`})
        }

        // Génération du token
        const token = jwt.sign({
            id: user.id,
            nom: user.nom,
            prenom: user.prenom,
            email: user.email
        }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_DURING})

        return res.json({access_token: token})
    }catch(err){
        return res.status(500).json({message: 'Internal error', err:err})
    }
}

exports.signup = async (req, res) => {
    const { nom, prenom, email, password} = req.body

    // Validation des datas
    if(!nom || !prenom || !email || !password){
        return res.status(400).json({ message: `Missing data`})
    }

    try{
        // Verification si utilisateuyr existe déjà
        const user = await User.findOne({ where: {email: email}, raw: true})
        if(user !== null){
            return res.status(409).json({ message: `This user already exists !`})
        }

        // Hash du mot de passe
        let hash = await bcrypt.hash(password, parseInt(process.env.BCRYPT_SALT_ROUND))
        req.body.password = hash

        // Création de l'utilisateur
        let newUser = await User.create(req.body)
        return res.json({ message: 'User created', data: newUser})
    }catch(err){
        return res.status(500).json({message: 'Internal error', err:err})
    }
}