import Express from "express";

const Server = Express();

Server.get("/", (req, res) => {
    res.json({
        message: "test",
    }).status(200);
});

Server.use(Express.json());

export default Server;
