import Server from "./Server/Server";
import { sequelize } from "./config/database";
import { Caixa } from "./app/models/Caixa";
import { Dado } from "./app/models/Dado"; 

(async () => {
    try{
        const results = await sequelize.sync()
        console.log(results)
    }catch(err){
        console.log(err)
    }
})()

Server.listen(8081, () => {
    console.log("Servidor iniciado com sucesso!");
});

Dado.create({
    id_da_caixa: 16,
    altura: 300
})