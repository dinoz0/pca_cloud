// Import des modules
const { DataTypes } = require('sequelize')


// Définition du modèle User
module.exports = (sequelize) => {
    return User = sequelize.define('User', {
        id: {type: DataTypes.INTEGER(10), primaryKey: true, autoIncrement: true},
        nom: {type: DataTypes.STRING(100), defaultValue: '', allowNull: false},
        prenom: {type: DataTypes.STRING(100), defaultValue: '', allowNull: false},
        email: {type: DataTypes.STRING, validate: {isEmail: true}},
        password: {type: DataTypes.STRING(64), is: /^[0-9a-f]{64}$/i}
    })
}


