import Sequelize, { Model } from "sequelize";
import { sequelize } from "../../config/database";
import { Usuario } from "./Usuario";

class Caixa extends Model {}

Caixa.init(
    {
        id_caixa: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        capacidade: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        marca: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        login: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        sensor: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        ip_esp: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
    },
    {
        sequelize,
        timestamps: false,
    },
);

export { Caixa };
