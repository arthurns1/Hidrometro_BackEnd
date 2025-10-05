import { Request, Response } from "express";
import { Caixa } from "../models/Caixa";

interface ICaixa {
    capacidade: number;
    marca: string;
    login: string;
    sensor: string;
    ip_esp: string;
}

class CaixaController {
    constructor() {}

    public static async create_caixa(
        req: Request<{}, {}, ICaixa>,
        res: Response,
    ) {
        try {
            const caixa = await Caixa.create({
                capacidade: req.body.capacidade,
                marca: req.body.marca,
                login: req.body.login,
                sensor: req.body.sensor,
                ip_esp: req.body.ip_esp,
            });

            res.status(201).json({
                success_message: "Caixa registrada com sucesso!",
                results: [],
            });
        } catch (err) {
            res.status(500).json({
                error_message: "Houve um erro ao registrar caixa!",
                error: err,
            });
        }
    }

    public static async get_all_caixas(req: Request, res: Response) {
        try {
            const caixas = await Caixa.findAll();

            res.status(200).json({
                message: "Sucesso ao retornar caixas!",
                results: caixas,
            });
        } catch (err) {
            res.status(500).json({
                error_message: "Houve um erro ao retornar caixas!",
                error: err,
            });
        }
    }

    public static async get_caixa_by_id(req: Request, res: Response) {
        try {
            const caixa = await Caixa.findOne({
                where: { id_caixa: req.params.id_caixa },
            });

            res.status(200).json({
                message: "Sucesso ao retornar caixa!",
                results: [caixa],
            });
        } catch (err) {
            res.status(500).json({
                error_message: "Houve um erro ao retornar caixa!",
                error: err,
            });
        }
    }

    public static async update_caixa_by_id(req: Request, res: Response) {
        try {
            await Caixa.update(req.body, {
                where: { id_caixa: req.params.id_caixa },
            });

            res.status(200).json({
                message: "Informações editadas com sucesso!",
                results: [],
            });
        } catch (err) {
            res.status(500).json({
                error_message: "Houve um erro ao editar informações da caixa!",
                error: err,
            });
        }
    }

    public static async delete_caixa_by_id(req: Request, res: Response) {
        try {
            await Caixa.destroy({
                where: { id_caixa: req.params.id_caixa },
            });

            res.status(200).json({
                message: "Caixa removida com sucesso!",
                results: [],
            });
        } catch (err) {
            res.status(200).json({
                error_message: "Caixa removida com sucesso!",
                errors: err,
            });
        }
    }
}

export { CaixaController };
