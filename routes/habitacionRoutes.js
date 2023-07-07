
const express = require("express");
const { getHabitacion, getHabitaciones } = require("../services/habitacion");
const validationHandler = require("../util/middlewares/validationHandler");
const { habitacionIdSchemaObject } = require("../util/schemas");

const habitacionRoutes = (app) => {
    const router = express.Router();
    
    //Ruta a utilizar
    app.use("/api/reservar/v1/habitacion", router);

    //Trae todas las habitaciones
    router.get("/", async (req, res, next) => {
        try {
            const data = await getHabitaciones();
            res.status(200).json({datos: data});
        } catch (err) {
            console.error(err.message);
        }
    });

    //Trae una habitación, se requiere un ID
    router.get("/:habitacionId", validationHandler(habitacionIdSchemaObject, "params"), async (req, res, next) => {
        try {
            const data = await getHabitacion(req.params.habitacionId);
            res.status(200).json(data);
        } catch (err) {
            console.error(err.message);
        }
    });
};

module.exports = habitacionRoutes;
