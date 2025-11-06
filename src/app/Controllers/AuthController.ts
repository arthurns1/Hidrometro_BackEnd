import { Request, Response } from "express";
import Jwt from "jsonwebtoken";
import { Usuario } from "../models/Usuario";
import { config } from "dotenv";

config();

interface ILogin {
    login: string;
    senha: string;
}

export class AuthController {
    static async login(req: Request<{}, {}, ILogin>, res: Response) {
        console.log(req.body.login);
        try {
            const usuario = await Usuario.findOne({
                where: {
                    login: req.body.login,
                },
            });
            let error_messages = [];

            if (usuario?.dataValues == undefined) {
                error_messages.push("Usuario não encontrado!");
            }

            if (req.body.senha != usuario?.dataValues.senha) {
                error_messages.push("Senha incorreta!");
            }

            if (!(typeof process.env.SECRET_KEY == "string")) {
                throw Error;
            }

            const token = Jwt.sign(
                { id: usuario?.dataValues.login },
                process.env.SECRET_KEY as string,
                { expiresIn: "1h" },
            );

            if (error_messages.length == 0) {
                res.status(200).json({
                    sucess_message: "Login realizado com sucesso!",
                    results: token,
                });
            } else {
                res.status(501).json({
                    error_messages,
                });
            }
        } catch (err) {
            res.status(500).json({
                error_message:
                    "Houve um erro interno ao realizar o login!" + err,
                error: err,
            });
        }
    }
}
