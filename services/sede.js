
const { create, get, getAll } = require("../lib/tables");

const getSedes = async () => {
  const sedes = await getAll("Sede");
  return sedes;
};

const getSede = async (id) => {
  const sede = await get("Sede", id);
  return sede;
};

module.exports = { getSede, getSedes };

