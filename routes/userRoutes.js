
const express = require("express");
const { getUser, getUsers, createUser } = require("../services/usuario");
const validationHandler = require("../util/middlewares/validationHandler");
const { usuariosIdSchemaObject, createUsuarioSchema } = require("../util/schemas");

const hotelApi = (app) => {
    const router = express.Router();

    //Ruta a utilizar
    app.use("/api/reservar/v1/usuario", router);

    //Traer todos los usuarios
    router.get("/", async (req, res, next) => {
        try {
            const data = await getUsers();
            res.status(200).json({datos: data});
        } catch (err) {
            console.error(err.message);
        }
    });

    //Traer un usuario, se requiere un ID
    router.get("/:usuarioId", validationHandler(usuariosIdSchemaObject, "params"), async (req, res, next) => {
        try {
            const data = await getUser(req.params.usuarioId);
            res.status(200).json(data);
        } catch (err) {
            console.error(err.message);
        }
    });

    // Crear un usuario
    router.post("/crear", validationHandler(createUsuarioSchema), async (req, res, next) => {
        try {
            createUser(req.body);
            res.status(200).json({ mensaje: "Usuario creado correctamente" });
        } catch (err) {
            console.error(err.message);
        }
    });
};

module.exports = hotelApi;
