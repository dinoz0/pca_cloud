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

// Synchronisation
sequelize.sync(err => {
    console.log(`Database Sync error`, err)
})

module.exports = sequelize