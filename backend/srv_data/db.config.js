// Import des modules
const { Sequelize } = require('sequelize')

// Connexion à la BDD
let sequelize = new Sequelize(
    process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logging: false
    }
)

// Mise en place des relations
const db = {}

db.sequelize = sequelize
db.User = require('./model/user')(sequelize)
db.Cocktail = require('./model/cocktail')(sequelize)

db.User.hasMany(db.Cocktail, {foreignKey: 'user_id', onDelete: 'cascade'})
db.Cocktail.belongsTo(db.User, { foreignKey: 'user_id'})

// Synchronisation
db.sequelize.sync({alter: true})

module.exports = db