import { Sequelize } from "sequelize";
import { config } from "dotenv";

config();

const sequelize = new Sequelize({
    database: "liga_jovem",
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: "postgres",
});

export { sequelize };
