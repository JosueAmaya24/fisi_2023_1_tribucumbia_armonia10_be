
const express = require("express");
const { getHotel, getHotels } = require("../services/hotel");
const validationHandler = require("../util/middlewares/validationHandler");
const { hotelIdSchemaObject } = require("../util/schemas");

const hotelRoutes = (app) => {
    const router = express.Router();

    //Ruta a utilizar
    app.use("/api/reservar/v1/hotel", router);

    //Trae todos los hoteles
    router.get("/", async (req, res, next) => {
        try {
            const data = await getHotels();
            res.status(200).json({datos: data});
        } catch (err) {
            console.error(err.message);
        }
    });

    //Trae un hotel, se requiere un ID
    router.get("/:hotelId", validationHandler(hotelIdSchemaObject, "params"), async (req, res, next) => {
        try {
            const data = await getHotel(req.params.hotelId);
            res.status(200).json(data);
        } catch (err) {
            console.error(err.message);
        }
    });
};

module.exports = hotelRoutes;
