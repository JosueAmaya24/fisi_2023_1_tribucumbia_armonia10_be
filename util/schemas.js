
const Joi = require("joi");

// Esquema para la entidad "Usuario"
const usuarioIdSchema = Joi.number().integer().min(1).max(10000);
const nombresSchema = Joi.string().regex(/^[a-zA-Z ]{2,30}$/);
const apellidosSchema = Joi.string().regex(/^[a-zA-Z ]{2,30}$/);
const dniSchema = Joi.string().alphanum().min(1).max(20);
const correoSchema = Joi.string().email();
const telefonoSchema = Joi.string().alphanum().min(1).max(20);
const contraseñaSchema = Joi.string().regex(/^[a-zA-Z0-9]{5,20}$/);

const createUsuarioSchema = Joi.object({
  nombres: nombresSchema.required(),
  apellidos: apellidosSchema.required(),
  dni: dniSchema.required(),
  correo: correoSchema.required(),
  telefono: telefonoSchema.required(),
  contraseña: contraseñaSchema.required(),
});

// Esquema para la entidad "Sede"
const sedeIdSchema = Joi.number().integer().min(1).max(1000);
const nombreSedeSchema = Joi.string().alphanum().min(1).max(255);
const direccionSedeSchema = Joi.string().min(1).max(255);
const telefonoSedeSchema = Joi.string().alphanum().min(1).max(255);
const horariosAtencionSchema = Joi.string().min(1).max(255);

const createSedeSchema = Joi.object({
  nombreSede: nombreSedeSchema.required(),
  direccion: direccionSedeSchema.required(),
  telefono: telefonoSedeSchema.required(),
  horariosAtencion: horariosAtencionSchema.required(),
});

// Esquema para la entidad "Pedido"
const pedidoIdSchema = Joi.number().integer().min(1).max(100000);
const usuarioIdPedidoSchema = Joi.number().integer().min(1).max(10000);
const sedeIdPedidoSchema = Joi.number().integer().min(1).max(1000);
const fechaHoraPedidoSchema = Joi.date();
const estadoPedidoSchema = Joi.string().min(1).max(255);

const createPedidoSchema = Joi.object({
  usuarioId: usuarioIdPedidoSchema.required(),
  sedeId: sedeIdPedidoSchema.required(),
  fechaHoraPedido: fechaHoraPedidoSchema.required(),
  estadoPedido: estadoPedidoSchema.required(),
});

// Esquema para la entidad "Producto"
const productoIdSchema = Joi.number().integer().min(1).max(100000);
const nombreProductoSchema = Joi.string().min(1).max(255);
const descripcionSchema = Joi.string().min(1).max(255);
const precioSchema = Joi.number().min(0).max(100000);
const disponibilidadSchema = Joi.string().min(1).max(255);

const createProductoSchema = Joi.object({
  nombreProducto: nombreProductoSchema.required(),
  descripcion: descripcionSchema.required(),
  precio: precioSchema.required(),
  disponibilidad: disponibilidadSchema.required(),
});

// Esquema para la entidad "Detalle_Pedido"
const detalleIdSchema = Joi.number().integer().min(1).max(100000);
const pedidoIdDetalleSchema = Joi.number().integer().min(1).max(100000);
const productoIdDetalleSchema = Joi.number().integer().min(1).max(100000);
const cantidadSchema = Joi.number().integer().min(1).max(100000);
const subtotalSchema = Joi.number().min(0).max(100000);

const createDetallePedidoSchema = Joi.object({
  pedidoId: pedidoIdDetalleSchema.required(),
  productoId: productoIdDetalleSchema.required(),
  cantidad: cantidadSchema.required(),
  subtotal: subtotalSchema.required(),
});

module.exports = {
  createUsuarioSchema,
  createSedeSchema,
  createPedidoSchema,
  createProductoSchema,
  createDetallePedidoSchema,
};

