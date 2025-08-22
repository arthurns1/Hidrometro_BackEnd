import {sequelize} from "../../config/database"
import Sequelize from "sequelize"
import { Caixa } from "./Caixa"

const Dado = sequelize.define("dado",{
    id_dado:{
        type: Sequelize.INTEGER,
        allowNull:false,
        primaryKey: true,
        autoIncrement: true
    },
    id_da_caixa:{
        type: Sequelize.INTEGER,
        allowNull: true,   
    },
    data_envio: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Date.now()
    },
    altura: {
        type: Sequelize.FLOAT,
        allowNull: true
    }

},{
    timestamps: false
})

Caixa.hasMany(Dado, 
    {
        foreignKey: "id_da_caixa",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    }
)

Dado.belongsTo(Caixa,{
    foreignKey: "id_da_caixa"
})

export {Dado}