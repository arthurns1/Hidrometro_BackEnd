import Server from "./Server/Server";
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
