import { Request, Response } from "express";
import { Dado } from "../models/Dado"; 

interface IDado{
    id_dado: number;
    id_da_caixa: number;
    data_envio: Date;
    altura: number;
}


class DadosController {
    constructor() {}

    public static async create_dado(req: Request<{},{},IDado>,res: Response){
        try{
            const caixa = await Dado.create({
                id_da_caixa: req.body.id_da_caixa,
                data_envio: req.body.data_envio,
                altura:req.body.altura,
            })

            caixa.save()

            res.status(201).json({
                success_message: "Dado salvo com sucesso",
                results: [],
            })
        }catch(err){
            res.status(500).json({
                error_message: "Houve um erro ao salvar dado!",
                error: err
            })
        }
    }

    public static async get_all_dados(req: Request, res: Response){
        try{
            const dados = await Dado.findAll()

            res.status(200).json({
                message: "Sucesso ao retornar dados!",
                results: dados})
        }catch(err){
            res.status(500).json({
                error_message: "Houve um erro ao retornar dados!",
                error: err
            })
        }
    }

    public static async get_dados_by_id_caixa(req:Request, res:Response){
        try{
            const dados = await Dado.findOne({
                where: {id_da_caixa: req.params.id_caixa}
            })

            res.status(200).json({
                message: "Sucesso ao retornar dados!",
                results: [dados]
            })
        }catch(err){
            res.status(500).json({
                error_message: "Houve um erro ao retornar dados!",
                error: err
            })
        }
    }

    public static async get_dado_by_id(req: Request, res: Response){
        try{
            const dado = await Dado.findOne({
                where: {id_dado: req.params.id_dado}
            })

            res.status(200).json({
                message: "Sucesso ao retornar dado!",
                results: [dado]
            })
        }catch(err){
            res.status(500).json({
                error_message: "Houve um erro ao retornar dado",
                error: err
            })
        }
    }

    public static async update_dado_by_id(req: Request<{},{}, IDado>, res: Response){
        try{
            await Dado.update(req.body,{
                where: {id_dado: req.body.id_dado},    
            })
            
            res.status(200).json({
                message: "Dado editado com sucesso!",
                results: []
            })
        }catch(err){
            res.status(500).json({
                error_message: "Houve um erro ao editar dado!",
                error: err
            })
        }
    }

    public static async delete_dado_by_id(req:Request, res: Response){
        try{
            Dado.destroy({
                where: {id_dado: req.body.id_dado}
            })

            res.status(200).json({
                message: "Dado removido com sucesso!",
                results: []
            })
        }catch(err){
            res.status(200).json({
                error_message: "Dado removido com sucesso!",
                errors: err
            })
        }
    }
}

export {DadosController}