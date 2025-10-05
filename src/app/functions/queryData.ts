import { intervalRequest } from "./IntervalRequest";
import { Caixa } from "../models/Caixa";

export async function queryData() {
    await Caixa.findAll().then((caixas) => {
        caixas.map((caixa) => {});
    });
}
