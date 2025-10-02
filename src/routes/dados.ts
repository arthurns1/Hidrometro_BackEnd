import { Router } from "express";
import { DadosController } from "../app/Controllers/DadosController";

const dados = Router()

dados.get("/get_all", DadosController.get_all_dados);
dados.get("/get_by_id/:id_dado", DadosController.get_dado_by_id)
dados.get("/get_by_id_caixa/:id_caixa", DadosController.get_dados_by_id_caixa)
dados.post("/create", DadosController.create_dado)
dados.put("/update", DadosController.update_dado_by_id)
dados.delete("/delete", DadosController.delete_dado_by_id)

export {dados}