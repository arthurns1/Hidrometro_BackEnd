import Sequelize from "sequelize"
import {sequelize} from "../../config/database"

const Caixa = sequelize.define(
    "caixa",
    {
        id_caixa:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        altura: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        largura: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        ip_esp: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        marca: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        capacidade: {
            type: Sequelize.NUMBER,
            allowNull: false
        }
    },
    {
        timestamps:false
    }
)

export {Caixa}