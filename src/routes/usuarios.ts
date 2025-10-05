import { Router } from "express";
import { UsuariosController } from "../app/Controllers/UsuariosController";

const usuario = Router();

usuario.post("/create", UsuariosController.create_usuario);
usuario.get("/get_all", UsuariosController.get_all_usuarios);
usuario.get("/get_by_login/:login", UsuariosController.get_usuario_by_login);
usuario.put(
    "/update_by_login/:login",
    UsuariosController.update_usuario_by_login,
);
usuario.delete(
    "/delete_by_login/:login",
    UsuariosController.delete_usuario_by_login,
);

export { usuario };
