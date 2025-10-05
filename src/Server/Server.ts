import Express from "express";
import { caixas } from "../routes/caixas";
import { dados } from "../routes/dados";
import cors from "cors";

const Server = Express();

Server.get("/", (req, res) => {
    res.json({
        message: "test",
    }).status(200);
});

Server.use(Express.json());
Server.use(
    cors({
        origin: "*",
    }),
);
Server.use("/caixas", caixas);
Server.use("/dados", dados);

export default Server;
