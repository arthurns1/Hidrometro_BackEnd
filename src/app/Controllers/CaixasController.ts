import { Request, Response } from "express";
import { Caixa } from "../models/Caixa";

interface ICaixa{
    id_caixa: number;
    altura: number;
    largura: number; 
    ip_esp: number;
    marca: string;
    capacidade: number;
}


class CaixaController {
    constructor() {}

    public static async create_caixa(req: Request<{},{},ICaixa>,res: Response){
        try{

            const caixa = await Caixa.create({
                altura:req.body.altura,
                largura:req.body.largura,
                ip_esp: req.body.ip_esp,
                capacidade: req.body.capacidade,
                marca: req.body.marca
            })

            caixa.save()

            res.status(201).json({
                success_message: "Usuário criado com sucesso",
                results: [],
            })
        }catch(err){
            res.status(500).json({
                error_message: "Houve um erro ao criar caixa!",
                error: err
            })
        }
    }

    public static async get_all_caixas(req: Request, res: Response){
        try{
            const caixas = await Caixa.findAll()

            res.status(200).json({
                message: "Sucesso ao retornar caixas!",
                results: caixas
            })
        }catch(err){
            res.status(500).json({
                error_message: "Houve um erro ao retornar caixas!",
                error: err
            })
        }
    }

    public static async get_caixa_by_id(req: Request, res: Response){
        try{
            console.log(req.params.id_caixa)
            const caixa = await Caixa.findOne({
                where: {id_caixa: req.params.id_caixa}
            })

            res.status(200).json({
                message: "Sucesso ao retornar caixa!",
                results: [caixa]
            })
            
        }catch(err){
            res.status(500).json({
                error_message: "Houve um erro ao retornar caixa!",
                error: err
            })
             
        }
    }

    public static async update_caixa_by_id(req: Request, res: Response){
        try{
            await Caixa.update(req.body,{
                where: {id_caixa: req.body.id_caixa},    
            })
            
            res.status(200).json({
                message: "Caixa editada com sucesso!",
                results: []
            })
        }catch(err){
            res.status(500).json({
                error_message: "Houve um erro ao editar caixa!",
                error: err
            })
        }
    }

    
    public static async delete_caixa_by_id(req:Request, res: Response){
        try{
            Caixa.destroy({
                where: {id_caixa: req.body.id_caixa}
            })

            res.status(200).json({
                message: "Caixa removida com sucesso!",
                results: []
            })
        }catch(err){
            res.status(200).json({
                error_message: "Caixa removida com sucesso!",
                errors: err
            })
        }
    }
}

export {CaixaController}