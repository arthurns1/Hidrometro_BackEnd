import { Usuario } from "../models/Usuario";
import { Request, Response } from "express";

interface IUsuario {
    login: string;
    senha: string;
}

export class UsuariosController {
    static async create_usuario(req: Request<{}, {}, IUsuario>, res: Response) {
        try {
            const usuario = await Usuario.create({
                login: req.body.login,
                senha: req.body.senha,
            });

            res.status(201).json({
                success_message: "Usuário criado com sucesso!",
                results: [],
            });
        } catch (err) {
            res.status(500).json({
                error_message: "Houve um erro ao criar usuário!",
                error: err,
            });
        }
    }

    static async get_all_usuarios(req: Request, res: Response) {
        try {
            const usuarios = await Usuario.findAll();

            res.status(200).json({
                sucess_message: "Sucesso ao retornar usuários",
                results: usuarios,
            });
        } catch (err) {
            res.status(500).json({
                error_message: "Houve um erro ao retornar usuários!",
                error: err,
            });
        }
    }

    static async get_usuario_by_login(req: Request, res: Response) {
        try {
            const usuario = await Usuario.findOne({
                where: {
                    login: req.params.login,
                },
            });

            res.status(200).json({
                sucess_message: "Sucesso ao retornar usuário",
                results: usuario,
            });
        } catch (err) {
            res.status(500).json({
                error_message: `Houve um erro ao retornar o usuário: ${err}`,
                error: err,
            });
        }
    }

    static async update_usuario_by_login(req: Request, res: Response) {
        try {
            const usuario = await Usuario.update(req.body, {
                where: {
                    login: req.params.login,
                },
            });

            res.status(200).json({
                sucess_message: "Sucesso ao editar usuário!",
                results: [],
            });
        } catch (err) {
            res.status(500).json({
                error_message: "Houve um erro ao editar este usuário!",
            });
        }
    }

    static async delete_usuario_by_login(req: Request, res: Response) {
        try {
            const usuario = await Usuario.destroy({
                where: {
                    login: req.params.login,
                },
            });

            res.status(200).json({
                sucess_message: "Sucesso ao remover usuário!",
                results: [],
            });
        } catch (err) {
            res.status(500).json({
                error_message: "Houve um errro ao remover este usuário!",
                results: [],
            });
        }
    }
}
