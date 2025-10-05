import Server from "./Server/Server";
import { intervalRequest } from "./app/functions/IntervalRequest";
import { Caixa } from "./app/models/Caixa";
import { sequelize } from "./config/database";

(async () => {
    try {
        const results = await sequelize.sync();
        console.log(results);
    } catch (err) {
        console.log(err);
    }
})();

Server.listen(8081, () => {
    console.log("Servidor iniciado com sucesso!");
});

intervalRequest();

//Ainda faltam:
//Middlewares para validação;
//Testes automatizados;
