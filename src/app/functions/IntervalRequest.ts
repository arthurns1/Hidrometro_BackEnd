import cron from "node-cron";
import { Caixa } from "../models/Caixa";

export async function intervalRequest() {
    cron.schedule(" 0 23 * * *", async () => {
        try {
            await Caixa.findAll().then((caixas) => {
                caixas.forEach(async (caixa) => {
                    try {
                        await fetch(`http://${caixa.dataValues.ip_esp}`, {
                            method: "GET",
                            headers: {
                                "Content-type": "application/json",
                            },
                            body: "dados",
                        });
                    } catch (err) {
                        console.log(`Houve um erro ao pedir os dados: ${err}`);
                    }
                });
            });
        } catch (err) {
            console.log(`Houve um erro ao consultar o banco de dados:${err}`);
        }
    });
}
