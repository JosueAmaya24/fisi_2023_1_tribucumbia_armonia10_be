const { create, get, getAll } = require("../lib/tables");

const getDetallesPedido = async () => {
  const detallesPedido = await getAll("Detalle_Pedido");
  return detallesPedido;
};

const getDetallePedido = async (id) => {
  const detallePedido = await get("Detalle_Pedido", id);
  return detallePedido;
};

const createDetallePedido = (entity) => {
  create("Detalle_Pedido", entity);
};

module.exports = { getDetallePedido, getDetallesPedido, createDetallePedido };
