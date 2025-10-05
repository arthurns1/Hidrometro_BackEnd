import Express from "express";

import { caixas } from "../routes/caixas";
import { dados } from "../routes/dados";
import { usuario } from "../routes/usuarios";

import cors from "cors";
import { AuthController } from "../app/Controllers/AuthController";

const Server = Express();

Server.use(Express.json());

Server.get("/", (req, res) => {
    res.json({
        message: "test",
    }).status(200);
});

Server.get("/login", AuthController.login);

Server.use(
    cors({
        origin: "*",
    }),
);
Server.use("/caixas", caixas);
Server.use("/dados", dados);
Server.use("/usuarios", usuario);

export default Server;
