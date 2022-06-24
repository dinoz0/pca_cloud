// Import des modules
const { DataTypes } = require('sequelize')


// Définition du modèle User
module.exports = (sequelize) => {
    return Cocktail = sequelize.define('Cocktail', {
        id: {type: DataTypes.INTEGER(10), primaryKey: true, autoIncrement: true},
        user_id: { type: DataTypes.INTEGER(10), allowNull: false},
        nom: {type: DataTypes.STRING(100), defaultValue: '', allowNull: false},
        description: {type: DataTypes.STRING(100), defaultValue: '', allowNull: false},
        recette: {type: DataTypes.TEXT, defaultValue: '', allowNull: false},
        imageUrl: { type: DataTypes.STRING, defaultValue:'', allowNull: true}
    })
}


