
const { get, getAll, create } = require("../lib/tables");
const { verificarReserva, getConstancia, getReservaId } = require("../lib/scripts");

const getReservas = async () => {
    const reservas = await getAll("reserva");
    return reservas;
};

const getReserva = async (id) => {
    const reserva = await get("reserva", id);
    return reserva;
};

const createReserva = async (entity) => {
    if (await verificarReserva(entity)) {
        const done = await create("reserva", entity);
        const reservaId = await getReservaId(entity.habitacionId, entity.inicio, entity.fin);
        const constancia = await getConstancia(reservaId.reservaId);
        return constancia;
    } else {
        throw new Error("Cruce de reservas");
    }
};

module.exports = { getReserva, getReservas, createReserva };
