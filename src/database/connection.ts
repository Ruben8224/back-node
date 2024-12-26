import { Sequelize } from "sequelize";

const sequelize = new Sequelize('api-nodejs', 'root', 'Ruben', {
    host: 'localhost',
    dialect: 'mysql'
})

export default sequelize;