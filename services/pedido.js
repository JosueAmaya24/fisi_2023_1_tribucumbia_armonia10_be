
const { create, get, getAll } = require("../lib/tables");

const getPedidos = async () => {
  const pedidos = await getAll("Pedido");
  return pedidos;
};

const getPedido = async (id) => {
  const pedido = await get("Pedido", id);
  return pedido;
};

const createPedido = (entity) => {
  create("Pedido", entity);
};

module.exports = { getPedido, getPedidos, createPedido };

