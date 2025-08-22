import { Router } from "express";
import { DadosController } from "../app/Controllers/DadosController";

const dados = Router()

dados.get("/get_all", DadosController.get_all_dados);
dados.get("/get_by_id", DadosController.get_dado_by_id)
dados.post("/create", DadosController.create_dado)
dados.put("/update", DadosController.update_dado_by_id)
dados.delete("/delete", DadosController.delete_dado_by_id)

export {dados}