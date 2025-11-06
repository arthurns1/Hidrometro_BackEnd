import Express from "express";

import { caixas } from "../routes/caixas";
import { dados } from "../routes/dados";
import { usuario } from "../routes/usuarios";

import cors from "cors";
import { AuthController } from "../app/Controllers/AuthController";

//config
const Server = Express();

Server.use(Express.json());

Server.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    }),
);

Server.get("/", (req, res) => {
    res.json({
        message: "test",
    }).status(200);
});

//Rotas
Server.post("/login", AuthController.login);
Server.use("/caixas", caixas);
Server.use("/dados", dados);
Server.use("/usuarios", usuario);

export default Server;
