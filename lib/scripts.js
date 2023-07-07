
const mysql = require("mysql2");
const { config } = require("../config/conf");

const conecction = mysql.createConnection({
  user: config.dbUser,
  host: config.dbHost,
  password: config.dbPassword,
  database: config.dbName,
});

const getAllProductos = () => {
  return new Promise((resolve, reject) => {
    conecction.query("SELECT * FROM Producto", (err, results) => {
      if (err) return console.error(err.message);
      resolve(results);
    });
  });
};

const getProducto = (productoId) => {
  return new Promise((resolve, reject) => {
    conecction.query(
      "SELECT * FROM Producto WHERE ID_Producto = ?",
      [productoId],
      (err, results) => {
        if (err) return console.error(err.message);
        resolve(results[0]);
      }
    );
  });
};

const agregarProducto = (producto) => {
  return new Promise((resolve, reject) => {
    conecction.query("INSERT INTO Producto SET ?", producto, (err, result) => {
      if (err) return console.error(err.message);
      console.log("Producto agregado:", result.insertId);
      resolve(result.insertId);
    });
  });
};

const actualizarProducto = (productoId, producto) => {
  return new Promise((resolve, reject) => {
    conecction.query(
      "UPDATE Producto SET ? WHERE ID_Producto = ?",
      [producto, productoId],
      (err, result) => {
        if (err) return console.error(err.message);
        console.log("Producto actualizado:", productoId);
        resolve("done");
      }
    );
  });
};

const eliminarProducto = (productoId) => {
  return new Promise((resolve, reject) => {
    conecction.query(
      "DELETE FROM Producto WHERE ID_Producto = ?",
      [productoId],
      (err, result) => {
        if (err) return console.error(err.message);
        console.log("Producto eliminado:", productoId);
        resolve("done");
      }
    );
  });
};

const getProductosCarrito = (carritoId) => {
  return new Promise((resolve, reject) => {
    conecction.query(
      `SELECT * FROM Producto INNER JOIN Detalle_Pedido ON Producto.ID_Producto = Detalle_Pedido.ID_Producto WHERE Detalle_Pedido.ID_Pedido = ?`,
      [carritoId],
      (err, results) => {
        if (err) return console.error(err.message);
        resolve(results);
      }
    );
  });
};

const agregarProductoCarrito = (carritoId, productoId, cantidad) => {
  return new Promise((resolve, reject) => {
    const detallePedido = {
      ID_Pedido: carritoId,
      ID_Producto: productoId,
      Cantidad: cantidad,
    };
    conecction.query(
      "INSERT INTO Detalle_Pedido SET ?",
      detallePedido,
      (err, result) => {
        if (err) return console.error(err.message);
        console.log("Producto agregado al carrito:", result.insertId);
        resolve(result.insertId);
      }
    );
  });
};

const actualizarProductosCarrito = (carritoId, productos) => {
  return new Promise((resolve, reject) => {
    const promises = productos.map((producto) => {
      const detallePedido = {
        ID_Pedido: carritoId,
        ID_Producto:        producto.ID_Producto,
        Cantidad: producto.Cantidad,
      };
      return new Promise((resolve, reject) => {
        conecction.query(
          "UPDATE Detalle_Pedido SET ? WHERE ID_Pedido = ? AND ID_Producto = ?",
          [detallePedido, carritoId, producto.ID_Producto],
          (err, result) => {
            if (err) return console.error(err.message);
            console.log("Producto actualizado en el carrito:", producto.ID_Producto);
            resolve("done");
          }
        );
      });
    });

    Promise.all(promises).then(() => {
      console.log("Productos del carrito actualizados");
      resolve("done");
    });
  });
};

const eliminarProductoCarrito = (carritoId, productoId) => {
  return new Promise((resolve, reject) => {
    conecction.query(
      "DELETE FROM Detalle_Pedido WHERE ID_Pedido = ? AND ID_Producto = ?",
      [carritoId, productoId],
      (err, result) => {
        if (err) return console.error(err.message);
        console.log("Producto eliminado del carrito:", productoId);
        resolve("done");
      }
    );
  });
};

const crearPago = (pago) => {
  return new Promise((resolve, reject) => {
    conecction.query("INSERT INTO Pago SET ?", pago, (err, result) => {
      if (err) return console.error(err.message);
      console.log("Pago creado:", result.insertId);
      resolve(result.insertId);
    });
  });
};

const getDetallesPago = (pagoId) => {
  return new Promise((resolve, reject) => {
    conecction.query(
      "SELECT * FROM Pago WHERE ID_Pago = ?",
      [pagoId],
      (err, results) => {
        if (err) return console.error(err.message);
        resolve(results[0]);
      }
    );
  });
};

const cancelarPago = (pagoId) => {
  return new Promise((resolve, reject) => {
    conecction.query(
      "DELETE FROM Pago WHERE ID_Pago = ?",
      [pagoId],
      (err, result) => {
        if (err) return console.error(err.message);
        console.log("Pago cancelado:", pagoId);
        resolve("done");
      }
    );
  });
};

module.exports = {
  getAllProductos,
  getProducto,
  agregarProducto,
  actualizarProducto,
  eliminarProducto,
  getProductosCarrito,
  agregarProductoCarrito,
  actualizarProductosCarrito,
  eliminarProductoCarrito,
  crearPago,
  getDetallesPago,
  cancelarPago,
};
