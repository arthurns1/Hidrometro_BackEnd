import { Router } from "express";
import { CaixaController } from "../app/Controllers/CaixasController";

const caixas = Router();

caixas.get("/get_all", CaixaController.get_all_caixas)
caixas.get("/get_by_id",CaixaController.get_caixa_by_id)
caixas.post("/create", CaixaController.create_caixa)
caixas.put("/update_by_id", CaixaController.update_caixa_by_id)
caixas.delete("/delete_by_id", CaixaController.delete_caixa_by_id)

export {caixas};
