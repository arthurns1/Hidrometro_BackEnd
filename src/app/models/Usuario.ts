import Sequelize, { Model } from "sequelize";
import { sequelize } from "../../config/database";
import { Caixa } from "./Caixa";

class Usuario extends Model {}

Usuario.init(
    {
        login: {
            primaryKey: true,
            type: Sequelize.STRING,
            allowNull: false,
        },
        senha: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        tableName: "usuarios",
        modelName: "usuarios",
    },
);

Usuario.hasMany(Caixa, {
    foreignKey: "login",
    onDelete: "CASCADE",
});

Caixa.belongsTo(Usuario, {
    foreignKey: "login",
});

export { Usuario };
