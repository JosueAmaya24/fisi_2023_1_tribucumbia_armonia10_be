
const express = require("express");
const { getReserva, getReservas, createReserva } = require("../services/reserva");
//
//

const reservaRutas = (app) => {
    const router = express.Router();

    //Ruta a utilizar
    app.use("/api/reservar/v1/reserva", router);

    //Traer todas las reservas
    router.get("/", async (req, res, next) => {
        try {
            const data = await getReservas();
            res.status(200).json({datos: data});
        } catch (err) {
            console.error(err.message);
        }
    });

    //Traer una reserva, se requiere un ID
    router.get("/:reservaId", async (req, res, next) => {
        try {
            const data = await getReserva(req.params.reservaId);
            res.status(200).json(data);
        } catch (err) {
            console.error(err.message);
        }
    });

    //Crear una reserva
    router.post("/crear", async (req, res, next) => {
        try {
            const constancia = await createReserva(req.body);
            res.status(200).json({
                mensaje: "Reserva Creada Correctamente",
                datos: constancia,
            });
        } catch (err) {
            console.error(err.message);
            res.status(400).json({ erorr: err.message });
        }
    });
};

module.exports = reservaRutas;
