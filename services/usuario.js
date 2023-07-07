
const { create, get, getAll } = require("../lib/tables");

const getUsers = async () => {
  const usuarios = await getAll("Usuario");
  return usuarios;
};

const getUser = async (id) => {
  const usuario = await get("Usuario", id);
  return usuario;
};

const createUser = (entity) => {
  create("Usuario", entity);
};

module.exports = { getUser, getUsers, createUser };

