import { Sequelize } from "sequelize";

const db = new Sequelize('example', 'admin','admin',{
    host: 'localhost',
    dialect: 'postgres'
})

export default db;