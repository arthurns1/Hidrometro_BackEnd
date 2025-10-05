import { sequelize } from "../../config/database";
import Sequelize, { Model } from "sequelize";
import { Caixa } from "./Caixa";

class Dado extends Model {}

Dado.init(
    {
        id_dado: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        data_criacao: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: new Date(),
        },
        altura: {
            type: Sequelize.FLOAT,
            allowNull: true,
        },
        id_caixa: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
    },
    {
        sequelize,
        timestamps: false,
        tableName: "dados",
        modelName: "dados",
    },
);

Caixa.hasMany(Dado, {
    foreignKey: "id_caixa",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

Dado.belongsTo(Caixa, {
    foreignKey: "id_caixa",
});

export { Dado };
